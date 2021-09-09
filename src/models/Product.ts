import client from '../database';

export type product = {
    
    id:number;
    name:string;
    price:number;
      
}

export class products {
    
    async Index():Promise<product[]>{
        try {
            //connect to database
            const conn = await client.connect();
            // create the query
            const sql = 'SELECT * FROM products'
            // run the query to DB
            const result = await conn.query(sql)
            //close the connection
            conn.release()
            
            return result.rows
        }
        catch(err){
            throw new Error(`couldn't get products, Error:${err}`)
        }
    }
    
    async show(id:string):Promise<product>{
        try{
        //connect to database
        const conn = await client.connect();
        // create the query
        const sql = 'SELECT * FROM products WHERE id = ($1)'
        // run the query to DB
        const result = await conn.query(sql,[id])
        //close the connection
        conn.release()
        
        return result.rows[0]
        
        
            
        }
        catch(err){
           throw new Error(`couldn't get products, Error:${err}`) 
        }
    }
    async create(p:product):Promise<product>{
        try {
            //connect to database
            const conn = await client.connect();
            // create the query
            const sql = 'INSERT INTO products (name,price) VALUES($1,$2) RETURNING *'
            // run the query to DB
            const result = await conn.query(sql,[p.name,p.price])
            //close the connection
            conn.release()
        
            return result.rows[0]
            
        }
        catch(err){
            throw new Error(`couldn't get products, Error:${err}`) 
        }
    }
    
}