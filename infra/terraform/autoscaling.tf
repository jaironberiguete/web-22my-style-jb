resource "aws_launch_template" "frontend" {
  name_prefix   = "frontend-react-lt-"
  image_id      = var.ami_id # Ubuntu 20.04 LTS
  instance_type = "t3.micro"
  key_name      = var.key_name


  vpc_security_group_ids = [
    aws_security_group.frontend_sg.id
  ]

  user_data = base64encode(<<-EOF
    #!/bin/bash
      set -e
      exec > /var/log/frontend_user_data.log 2>&1

      # Update & deps
      apt-get update -y
      apt-get install -y curl git nginx build-essential

      # Node 22 (Vite compatible)
      curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
      apt-get install -y nodejs

      # Start nginx
      systemctl enable nginx
      systemctl start nginx

      # Clone repo
      cd /home/ubuntu
      git clone https://github.com/jaironberiguete/web-22my-style-jb.git || true

      cd web-22my-style-jb/frontend
      chown -R ubuntu:ubuntu /home/ubuntu/web-22my-style-jb

      # Build as ubuntu user
      sudo -u ubuntu npm install
      sudo -u ubuntu npm run build

      # Deploy Vite output
      rm -rf /var/www/html/*
      cp -r dist/* /var/www/html/
      chown -R www-data:www-data /var/www/html

      systemctl restart nginx
      echo "Frontend deployed successfully"

  EOF
  )

  tag_specifications {
    resource_type = "instance"
    tags = {
      Name = "frontend-react"
    }
  }
}

resource "aws_autoscaling_group" "frontend" {
  desired_capacity = 1
  min_size         = 1
  max_size         = 2

  target_group_arns = [aws_lb_target_group.frontend_tg.arn]


  vpc_zone_identifier = [
    aws_subnet.private_app_1a.id,
    aws_subnet.private_app_1b.id
  ]

  launch_template {
    id      = aws_launch_template.frontend.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value               = "frontend-asg"
    propagate_at_launch = true
  }
}

resource "aws_autoscaling_attachment" "frontend_alb_attachment" {
  autoscaling_group_name = aws_autoscaling_group.frontend.name
  lb_target_group_arn    = aws_lb_target_group.frontend_tg.arn
}