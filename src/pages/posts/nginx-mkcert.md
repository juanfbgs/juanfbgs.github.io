---
layout: "../../layouts/MarkdownLayout.astro"
title: "Nginx mkcert lab"
description: "Locally trusted SSL certificates in Nginx using mkcert"
pubDate: "2026-06-30"
---

### Download tools

[Docker](https://www.docker.com/get-started/)

#### mkcert

```bash
sudo apt update && sudo apt install mkcert libnss3-tools
```

### Install the CA into your system

```bash
mkcert -install
```

```bash
> mkcert -install

Created a new local CA 💥
The local CA is now installed in the system trust store! ⚡️
```

### Create lab directory

```bash
mkdir nginx-mkcert-lab && cd nginx-mkcert-lab
mkdir certs html
```

### Generate the certs

```bash
cd certs
```

```bash
> mkcert localhost 127.0.0.1


Created a new certificate valid for the following names 📜
 - "localhost"
 - "127.0.0.1"

The certificate is at "./localhost+1.pem" and the key at "./localhost+1-key.pem" ✅

It will expire on 30 September 2028 🗓
```


