import supertest from 'supertest';
import app from '../server';
import client from '../database';
import {product,products} from '../models/Product'
const request = supertest(app);
let token:string;
const theProduct:product={
       id:1,
     name: 'pepsi',
        price:55,
}
/*
describe('test endpoint of products',()=>{
    beforeAll(async()=>{
        const theProduct= new products();
        await theProduct.create({
     id:1, 
   name: 'pepsi',
        price:5
    });
        
    });
    
    afterAll(async()=>{
const conn = await client.connect();
    const sql =
				"DELETE FROM Products WHERE name = 'pepsi' "; ;
			await conn.query(sql);
			conn.release();
})

    
})
*/

describe('Test product endpoint responses', () => {
    beforeAll(async()=>{
        const response = await request.post('/users').send({
            //id:'2',
            firstName:'Mohamed',
            lastName:'Ayman',
            password:'pass123',
        })
        token=response.body;
    })
    afterAll(async()=>{
        const conn = await client.connect();
        const sql =
				"DELETE FROM users WHERE lastname = 'Ayman' "; 
        await conn.query(sql);
			conn.release();
    })
    it('post to DB',async ()=>{
        const response = await request.post('/product').set('Authorization', "Bearer "+token).send(theProduct);
        expect(response.body.name).toEqual('pepsi');
        console.log(response.body)
        
        
        })
    
      it('index route for products',async ()=>{
        const response = await request.get('/product');
        expect(response.body[0].price).toEqual(55);
        
        })
    it('show route for products',async ()=>{
        const response = await request.get('/product/1');
        expect(response.body.price).toEqual(55);
        
        })
        
    
})


