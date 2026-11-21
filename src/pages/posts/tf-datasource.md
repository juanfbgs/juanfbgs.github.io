---
layout: "../../layouts/MarkdownLayout.astro"
title: "Terraform Data Sources"
description: "Retrieve dynamic attributes from infrastructure"
pubDate: "2026-08-25"
---

> A Terraform data source is a read-only block that fetches information about existing resources or external systems (such as AWS or Azure) without creating, modifying, or managing them.

Unlike resources, which have a full lifecycle (Create, Read, Update, Delete), data sources only perform Read operations.

### Syntax

Data sources are declared using a data block. The syntax consists of the data source type (provided by a Terraform provider) and a local reference name:

```bash
data "<PROVIDER_TYPE>" "<LOCAL_NAME>" {
  # Arguments used to query or filter the resource
}
```

### Example

`datasource.tf`

```tf
data "aws_region" "current" {}

data "aws_availability_zones" "available" {}
```

`outputs.tf`

```tf
output "region" {
  value = data.aws_region.current.region
}

output "availability_zones" {
  value = data.aws_availability_zones.available.names
}
```

```bash
terraform plan
```

```bash
data.aws_availability_zones.available: Reading...
data.aws_region.current: Reading...
data.aws_region.current: Read complete after 0s [id=us-east-1]
data.aws_availability_zones.available: Read complete after 0s [id=us-east-1]

Changes to Outputs:
  + availability_zones = [
      + "us-east-1a",
      + "us-east-1b",
      + "us-east-1c",
    ]
  + region             = "us-east-1"
```

