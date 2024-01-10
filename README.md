# m2-secure-coding-app

## Overview

m2-secure-coding-app is a web application for Secure Coding Module - Software Engineering @ EFREI.
It focuses on secure coding best practises..
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

Clone the Repository:
Open a terminal or command prompt and use the git clone command to clone the repository.

```
git clone https://github.com/clementnunes/m2-secure-coding
```

Navigate to the Project Directory:
Change your current directory to the one where the project has been cloned.

```
cd repository
```

**If used without Docker:**
```
yarn install
```
or 
```
npm install
```
Install Postgres Database and Configure. Variables can be modified in .env file.

**With Docker:**
To build and start the database instance and PgAdmin:
```
docker compose up
```

## Usage
**For Windows:**
- Build:
```yarn run build-w```
- Run:
```yarn run start-w```

**For Linux:**
- Build:
```yarn run build```
- Run:
```yarn run start```

Tests:
```yarn run test```

## Features
API Web application exposing a few routes to create and get users.

It uses secure coding practises such as class validation, testing, DTO, secure configuration, JSON Schema...

It uses Fastify as web framework, Postgres as database and Chai and Mocha for testing.

## Contact

**Clement Nunes**\
**clement.nunes@efrei.net**
