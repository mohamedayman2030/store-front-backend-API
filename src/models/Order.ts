import client from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config()

export type order = {
    id: string;
    userID:string;
    status:string;
}

export class orders{
    
      async create(o: order): Promise<order> {
    try {
      const sql =
        'INSERT INTO Orders (status, userID) VALUES($1, $2) RETURNING *';

      const conn = await client.connect();

      const result = await conn.query(sql, [o.status, o.userID]);

      const theorder = result.rows[0];

      conn.release();

      return theorder;
    } catch (err) {
      throw new Error(`Could not add new order ${o.id}. Error: ${err}`);
    }
  }
    
    async show(user_id:string):Promise<order> {
        try {
            
              
            const connection =await client.connect();
            
            const sql = 'SELECT * FROM orders WHERE userID = ($1) ORDER BY id DESC LIMIT 1'
          
            const result = await connection.query(sql,[user_id])
           
            const theamount=result.rows[0]
            
             connection.release()
            return theamount
            
        }
        catch(err){
            throw new Error(`couldn't get order, Error:${err}`)
        }
    }

    async addproduct(id:string,quantity:number,orderid:string,productid:string):Promise<order> {
        try {
             
            const conn =await  client.connect();
            
            const sql = 'INSERT INTO Order_product (quantity,order_id,product_id) VALUES($1,$2,$3) RETURNING * ';
           
            const result = await conn.query(sql,[quantity,orderid,productid]);
            conn.release();
            return result.rows[0];
        }
        catch(err){
            throw new Error(`Could not add product:${err}`)
        }
    }
    
    
}