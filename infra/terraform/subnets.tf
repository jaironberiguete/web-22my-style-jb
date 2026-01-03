resource "aws_subnet" "public_1a" {
  vpc_id            = aws_vpc.this.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_subnet" "public_1b" {
  vpc_id            = aws_vpc.this.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "us-east-1b"
}

resource "aws_subnet" "private_app_1a" {
  vpc_id            = aws_vpc.this.id
  cidr_block        = "10.0.3.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_subnet" "private_app_1b" {
  vpc_id            = aws_vpc.this.id
  cidr_block        = "10.0.4.0/24"
  availability_zone = "us-east-1b"
}

resource "aws_subnet" "private_db_1a" {
  vpc_id            = aws_vpc.this.id
  cidr_block        = "10.0.5.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_subnet" "private_db_1b" {
  vpc_id            = aws_vpc.this.id
  cidr_block        = "10.0.6.0/24"
  availability_zone = "us-east-1b"
}
