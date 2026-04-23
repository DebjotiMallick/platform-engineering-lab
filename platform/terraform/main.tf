provider "aws" {
  token = var.aws_token
}

resource "aws_instance" "vm" {
  count           = 3
  label           = "node-${count.index + 1}"
  region          = var.region
  instance_type   = var.instance_type
  ami             = var.image
  authorized_keys = [file(var.ssh_public_key)]

  tags = [
    "terraform",
    "sre",
    "vm-${count.index + 1}"
  ]
  swap_size  = 256
  private_ip = true
}
