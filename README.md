# Storefront backend API
## Description

Imagine that you are a web developer at a small company. The company stakeholders have decided they want to set up an online store to make their great product ideas available for purchase -- and they want you and your co-worker to build it.

The stakeholders have put together a list of requirements for this online store. Your co-worker will be building the frontend and you will be supplying the JavaScript API. 

## Requirements

to get the API routes, database schema and the HTTP verbs check the Requirements file

## Installation
this ection contains all the packages used in this project

yarn 
```
npm install yarn -g
```
dotenv
```
yarn add dotenv
```
migrations
```
npm install -g db-migrate
yarn add db-migrate db-migrate-pg
```
jasmine
```
npm install -g jasmine
yarn add jasmine @types/jasmine
```
super test
```
npm i supertest
npm i --save-dev @types/supertest
```
Bcrypt
```
yarn add Bcrypt
```
## Run and test the project

to run the project
```
npm run start 
```
to build the project
```
npm run build
```
to test the project
1- test endpoints response
add this line in jasmine.json in spec/support/jasmine.ts in spec_files section instead of the current line
```
"tests/*[eE]P.js"
```
2-test models
add this line in jasmine.json in spec/support/jasmine.ts in spec_files section instead of the current line
```
"tests/*[sS]pec.js"
```
then run this command
```
npm run test
```
to setup the database
```
su postgres
psql postgres
CREATE USER shopping_user WITH PASSWORD 'password123';
CREATE DATABASE shopping;
CREATE DATABASE shopping_test;
\c shopping
GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;
```


## .env variables

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=shopping
POSTGRES_TEST=shopping_test
POSTGRES_USER=shopping_user
POSTGRES_PASSWORD=password123
BCRYPT_PASSWORD=the_secret_password
SALT_ROUNDS=10
TOKEN_SECRET=thebest56

ENV = test

