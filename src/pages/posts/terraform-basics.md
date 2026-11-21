---
layout: "../../layouts/MarkdownLayout.astro"
title: "Terraform Basics"
description: "Key terraform concepts explained"
pubDate: "2026-06-27"
---

### What is Terraform?

[Terraform intro](https://developer.hashicorp.com/terraform/intro)

Terraform is an **Infrastructure as Code (IaC)** tool that uses a structured language called **HCL (HashiCorp Configuration Language)**. Its main function is to verify that the infrastructure deployed on a cloud provider and on-prem matches the code written by the user.

### Main Terraform Commands

`terraform init`: This is the first command executed in any project. It initializes the working directory and downloads the necessary providers (like AWS) from the public registry.

`terraform plan`: This command reads the configuration files and previews the changes that will be made. It compares the current state of the infrastructure against the code and the state file to show what will be added, changed, or destroyed.

`terraform apply`: This command executes the changes defined in the configuration. It creates or modifies the resources in the cloud provider and updates the state file.

`terraform destroy`: This command removes all resources managed by the specific Terraform project.

`terraform fmt`: This command formats Terraform configuration files, ensuring consistent indentation, spacing, and block layout.

`terraform validate`: This command checks whether Terraform configuration files are syntactically valid and ensures that variables and attributes are implemented correctly.

### File Types

`.tf` files: These are the primary configuration files where the HCL code is written to define providers, resources, and variables.

`terraform.tfstate` (State File): This is a critical file created after running apply. It stores the current state of your infrastructure, allowing Terraform to map resources to your configuration.


