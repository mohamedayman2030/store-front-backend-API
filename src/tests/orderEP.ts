import supertest from 'supertest';
import app from '../server';
import {order,orders} from '../models/Order';
import client from '../database';
const request=supertest(app);
let token:string;


let theorder:order={
            id:'1',
            status:'complete',
            userID:'1',
            
        };

describe('test order endpoints',()=>{
  beforeAll(async()=>{
        const response = await request.post('/users').send({
            id:'1',
            firstName:'Mohamed',
            lastName:'Ayman',
            password:'pass123',
        })
        token=response.body;
        
    })
    afterAll(async()=>{
        const conn = await client.connect();
        const sql =
				"DELETE FROM users WHERE firstname = 'Mohamed' "; 
        await conn.query(sql);
			conn.release();
    })
    afterAll(
             async()=>{
        const connection = await client.connect();
        const sql = "DELETE FROM Orders WHERE status = 'complete' "
        await connection.query(sql);
        connection.release();
    }
            )
    it('create new order',async()=>{
        const res = await request.post('/orders').send(theorder)
        expect(res.body.status).toEqual('complete');
        console.log(res.body)
    })
    it('show the last order',async()=>{
        const response = await request.get('/orders/1').set('Authorization', "Bearer "+token);
        expect(response.body.status).toEqual('complete')
    })
})

