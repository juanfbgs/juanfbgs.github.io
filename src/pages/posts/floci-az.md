---
layout: "../../layouts/MarkdownLayout.astro"
title: "Floci AZ local Azure emulator"
description: "Free and open-source alternative to localstack."
pubDate: "2026-06-16"
---

[Floci-AZ](https://floci.io/floci-az/)

### Docker compose setup

```yml
services:
  floci-az:
    image: floci/floci-az:latest
    ports:
      - "4577:4577"
    volumes:
      - ./data:/app/data
      - /var/run/docker.sock:/var/run/docker.sock  # required for Azure Functions
```

```bash
docker compose up -d
```

All services are immediately available at `http://localhost:4577` 

### Python example

#### Create an uv project

```bash
mkdir flocidemo && cd flocidemo
```

```bash
uv init
```

#### Install the Azure Blob Storage package

```bash
uv add azure-storage-blob
```

#### Write this code in main.py

```python
from azure.storage.blob import BlobServiceClient

conn_str = (
    "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;"
    "AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMh0==;"
    "BlobEndpoint=http://localhost:4577/devstoreaccount1;"
)

client = BlobServiceClient.from_connection_string(conn_str)
client.create_container("dev-container")

blob = client.get_container_client("dev-container").get_blob_client("hello.txt")
blob.upload_blob(b"Hello from floci-az!")
print(blob.download_blob().readall())
```

#### Run script

```bash
uv run main.py
```

#### Result

```bash
b'Hello from floci-az!'
```

