---
layout: "../../layouts/MarkdownLayout.astro"
title: "Helm package manager for Kubernetes"
description: "Installation guide"
pubDate: "2026-08-26"
---

> Helm is an open source package manager for Kubernetes that simplifies the deployment, management, and upgrading of applications within Kubernetes clusters.

[Helm docs](https://helm.sh/docs)

### Linux Installation

#### Download the binary

```bash
wget https://get.helm.sh/helm-v4.2.4-linux-amd64.tar.gz 
```

#### Extract the archive

```bash
tar -zxvf helm-v4.2.4-linux-amd64.tar.gz 
```

#### Move the binary

Place the helm executable in a directory in your PATH (e.g., /usr/local/bin/)

```bash
sudo mv linux-amd64/helm /usr/local/bin/helm 
```

#### Verify installation

```bash
helm version
```

```bash
version.BuildInfo{Version:"v4.2.4", GitCommit:"3900f434fd3ef2b84065dc04508df48f288dba00", GitTreeState:"clean", GoVersion:"go1.26.5", KubeClientVersion:"v1.36"}
```

### Usage Example

Helm manages Kubernetes applications through **Charts** (packages of pre-configured Kubernetes resources).


