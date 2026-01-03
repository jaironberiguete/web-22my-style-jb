output "vpc_id" {
  value = aws_vpc.this.id
}

output "alb_dns" {
  value = aws_lb.public_alb.dns_name
}