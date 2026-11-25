---
layout: "../../layouts/MarkdownLayout.astro"
title: "Kind setup"
description: "Local Kubernetes cluster with Kind"
pubDate: "2026-11-25"
---

### Download tools

[Docker](https://www.docker.com/get-started/)

[kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

[Kind](https://kind.sigs.k8s.io/)

### Create a Kubernetes cluster with Kind

```yml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
name: lab-cluster
nodes:
- role: control-plane
- role: worker
- role: worker
```

```bash
kind create cluster --config=config.yaml
```

```bash
Creating cluster "lab-cluster" ...
 ✓ Ensuring node image (kindest/node:v1.37.0) 🖼️
 ✓ Preparing nodes 📦 📦 📦
 ✓ Writing configuration 📜
 ✓ Starting control-plane 🕹️
 ✓ Installing CNI 🔌
 ✓ Installing StorageClass 💾
 ✓ Joining worker nodes 🚜
Set kubectl context to "kind-lab-cluster"
You can now use your cluster with:

kubectl cluster-info --context kind-lab-cluster

Have a question, bug, or feature request? Let us know! https://kind.sigs.k8s.io/#community 🙂
```


### Check cluster status

```bash
kubectl get nodes
```

```bash
NAME                        STATUS   ROLES           AGE     VERSION
lab-cluster-control-plane   Ready    control-plane   3m9s    v1.37.0
lab-cluster-worker          Ready    <none>          2m56s   v1.37.0
lab-cluster-worker2         Ready    <none>          2m57s   v1.37.0
```

### Delete cluster

```bash
> kind get clusters
lab-cluster
```

```bash
kind delete cluster --name lab-cluster
```

```bash
Deleting cluster "lab-cluster" ...
Deleted nodes: ["lab-cluster-worker2" "lab-cluster-worker" "lab-cluster-control-plane"]
```

