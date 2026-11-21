---
layout: "../../layouts/MarkdownLayout.astro"
title: "FastAPI setup with uv"
description: "Manage project dependencies with uv package manager"
pubDate: "2026-06-25"
---

### Install mise

[mise](https://mise.jdx.dev/getting-started.html)


### Install Python and uv using mise

[mise + python][https://mise.jdx.dev/lang/python.html]

```bash
mise use -g python@latest
```

```bash
mise use -g uv@latest
```

### Create project

```bash
uv init fastapi-uv-demo
```

### Install dependencies

```bash
uv add "fastapi[standard]" sqlalchemy "psycopg[binary]" alembic pydantic-settings
```

### Activate virtual enviroment

```bash
source .venv/bin/activate
```

### Create project structure

```bash
mkdir -p app/{core,models,routers,schemas,services}
touch app/{core,models,routers,schemas,services}/__init__.py
```

Move `main.py` to app folder

```bash
mv main.py app
```

### Init alembic 

```bash
alembic init migrations
```

### Manage enviroment variables

Create `.env.example` and copy to `.env` file

```bash
# PostgreSQL Configuration
POSTGRES_USER=postgres_user
POSTGRES_PASSWORD=my_secure_password123
POSTGRES_DB=fastapi_db
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

```bash
cp .env.example .env
```

***Change .env credentials***

Add `.env` to gitignore

```bash
# Env Files
.env

# Python-generated files
__pycache__/
*.py[oc]
build/
dist/
wheels/
*.egg-info

# Virtual environments
.venv
```


### Final structure

```bash
.
├── app
│   ├── alembic.ini
│   ├── core
│   │   ├── config.py
│   │   └── __init__.py
│   ├── main.py
│   ├── migrations
│   │   ├── env.py
│   │   ├── README
│   │   ├── script.py.mako
│   │   └── versions
│   ├── models
│   │   └── __init__.py
│   ├── routers
│   │   └── __init__.py
│   ├── schemas
│   │   └── __init__.py
│   └── services
│       └── __init__.py
├── .env
├── .env.example
├── .gitignore
├── pyproject.toml
├── .python-version
├── README.md
└── uv.lock
```

### App structure breakdown

#### core

It contains `config.py` and `database.py` files.

`config.py`: type-safe configuration management using *Pydantic Settings*.

```python
from dotenv import find_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Postgres Settings
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_PORT: int

    @property
    def DATABASE_URL(self) -> str:
        return f"postgresql+psycopg://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"

    model_config = SettingsConfigDict(env_file=find_dotenv(), env_file_encoding="utf-8")


settings = Settings()
```

`database.py`: database connection engine setup using `SQLAlchemy`.

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
from .config import settings

engine = create_engine(settings.DATABASE_URL)

SessionLocal = sessionmaker(bind=engine, autoflush=False)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

#### models

It contains your **database schema**.

`user.py`: User model class that inherits from `Base`.

```python
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from core.database import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(100), unique=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
```

#### schemas

[Pydantic models](https://pydantic.dev/docs/validation/latest/concepts/models/)

This folder defines the inputs and outputs of your API endpoints using Pydantic. It validates data coming into your application from the user, and structures data going out to the user.

User register request example:

```bash
from typing import Annotated, Self

from pydantic import BaseModel, EmailStr, Field, model_validator


PasswordStr = Annotated[
    str,
    Field(
        min_length=8,
        max_length=100,
        pattern=r"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]+$",
    ),
]


class UserRegisterRequest(BaseModel):
    username: Annotated[str, Field(min_length=3, max_length=20)]
    email: EmailStr
    password: PasswordStr
    confirm_password: str

    @model_validator(mode="after")
    def check_passwords_match(self) -> Self:
        if self.password != self.confirm_password:
            raise ValueError("Passwords do not match")
        return self
```

#### routers

This folder defines your HTTP routes (`@router.get`, `@router.post`).

`auth.py`: Basic register example.

```bash

```
