---
layout: "../../layouts/MarkdownLayout.astro"
title: "Minikube setup"
description: "Local Kubernetes cluster using Minikube"
pubDate: "2026-06-25"
---

### Download tools

[Docker](https://www.docker.com/get-started/)

[kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

[Minikube](https://minikube.sigs.k8s.io/docs/)

### Create a Kubernetes cluster with Minikube

```bash
minikube start
```

```bash
😄  minikube v1.38.1 on Linuxmint 22.3
🆕  Kubernetes 1.35.1 is now available. If you would like to upgrade, specify: --kubernetes-version=v1.35.1
✨  Using the docker driver based on existing profile
👍  Starting "minikube" primary control-plane node in "minikube" cluster
🚜  Pulling base image v0.0.50 ...
🔄  Restarting existing docker container for "minikube" ...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🐳  Preparing Kubernetes v1.35.0 on Docker 29.2.0 ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

### Check cluster status

```bash
minikube status
```

```bash
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

### Using kubectl for Cluster Interaction

```bash
> kubectl version

Client Version: v1.36.2
Kustomize Version: v5.8.1
Server Version: v1.35.0
```

```bash
> kubectl get nodes

NAME       STATUS   ROLES           AGE   VERSION
minikube   Ready    control-plane   10m   v1.35.0
```

### Stops the currently running Minikube cluster

```bash
minikube stop
```

### Deletes the Minikube cluster

```bash
minikube delete
```

### Documentation

[Use kubectl inside minikube](https://minikube.sigs.k8s.io/docs/handbook/kubectl/)

[kubectl reference](https://kubernetes.io/docs/reference/kubectl/)

