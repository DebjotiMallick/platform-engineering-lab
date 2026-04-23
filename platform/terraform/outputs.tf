output "vm_ips" {
  description = "Public IPs of created VMs"
  value       = linode_instance.vm[*].ip_address
}

output "vm_private_ips" {
  description = "Private IPs of created VMs"
  value       = linode_instance.vm[*].private_ip
}

