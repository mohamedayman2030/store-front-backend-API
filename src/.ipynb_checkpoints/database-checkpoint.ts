
import {Pool} from 'pg';

import dotenv from 'dotenv';
// initialize .env variables
dotenv.config()
// import postgress info from .env 
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
} = process.env
// connect to database


const client = new Pool({
  host: POSTGRES_HOST,
  database: ENV === "dev" ? POSTGRES_DB : POSTGRES_TEST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});


export default client