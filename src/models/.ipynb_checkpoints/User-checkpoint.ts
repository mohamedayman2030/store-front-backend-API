import client from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
export type user = {
id:string;
firstName: string;
lastName: string;
password:string;
}

dotenv.config()

const pepper= process.env.BCRYPT_PASSWORD as string
const saltRounds=process.env.SALT_ROUNDS as string


export class usersStore {
   async Index():Promise<user[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM users'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
            
            }
        catch(err){
            
            throw new Error(`couldn't get users, Error:${err}`)
            
        }
        }
  
    async show(id:string):Promise<user> {
        try {
            const conn = await client.connect()
            const sql = 'SELECT * FROM users WHERE id = ($1)'
            const result = await conn.query(sql,[id])
            conn.release()
            return result.rows[0]
        }
        catch(err){
              throw new Error(`couldn't get user, Error:${err}`)
        }
    }
    async create(u:user):Promise<user> {
        try {
            const conn = await client.connect()
            const sql = ' INSERT INTO users (firstName,lastName,password) VALUES($1,$2,$3) RETURNING firstName '
            const hash = bcrypt.hashSync(u.password+pepper,parseInt(saltRounds));
            const result = await conn.query(sql,[u.firstName, u.lastName, hash])
            
            conn.release()
            return result.rows[0]
            
        }
        catch(err){
            throw new Error(`couldn't create user, Error:${err}`)
        }
        
    }
    
 /*
     async authenticate(username:string,password:String):Promise<user|null> {
        const conn = await client.connect()
        const sql = 'SELECT password FROM users WHERE firstName = ($1)'
        const result = await conn.query(sql,[username])
        console.log(password+pepper)
         if(result.rows.length){
             const user = result.rows[0]
             if(bcrypt.compareSync(password+pepper,user.password)){
                 return user
             }
         }
         return null
        
    }
    */
}