resource "aws_db_subnet_group" "db" {
  subnet_ids = [
    aws_subnet.private_db_1a.id,
    aws_subnet.private_db_1b.id
  ]
}

resource "aws_db_instance" "master" {
  identifier        = "ecommerce-db"
  engine            = "postgres"
  instance_class    = "db.t3.micro"
  allocated_storage = 20

  username = var.db_username
  password = var.db_password

  backup_retention_period = 7 # ✅ REQUIRED for replicas

  vpc_security_group_ids = [aws_security_group.db_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.db.name

  skip_final_snapshot = true
}


resource "aws_db_instance" "replica" {
  identifier          = "ecommerce-db-replica"
  replicate_source_db = aws_db_instance.master.identifier
  instance_class      = "db.t3.micro"
  publicly_accessible = false
  skip_final_snapshot = true
}