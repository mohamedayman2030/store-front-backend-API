import {order,orders} from '../models/Order';
import {user,usersStore} from '../models/User';
import client from '../database';

const theOrder = new orders()

describe('test db of orders',()=>{
        beforeAll(async () => {
        const theOrder = new orders()
        const theUser = new usersStore()
      await theUser.create({
         id:'1',
  firstName:'Mohamed',
        lastName:'Ahmed',
        password:'123'
      });
         });
    it('should have a show method',()=>{
    expect(theOrder.show).toBeDefined()
});

it('create method should add order', async () => {

const result = await theOrder.create({
          id:'1',
            status:'complete',
            userID:'1',
      });
        expect(result).toBeDefined()
    
    })   

it('show method should return the correct order', async () => {
    const result = await theOrder.show('1');
    expect(result).toBeDefined()
    
    /*toEqual({
       id:'1',
            status:'complete',
            userID:'1',
    });*/
  });


afterAll(async()=>{
const conn = await client.connect();
    const sql =
				"DELETE FROM Users WHERE lastName = 'Ahmed' "; ;
			await conn.query(sql);
			conn.release();
})
    
    afterAll(async()=>{
    const conn = await client.connect();
    const sql =
				"DELETE FROM orders WHERE status = 'complete' "; ;
			await conn.query(sql);
			conn.release();
})
   
})

     /*
      await theOrder.create({
     id: '1',
        user_id:1,
        status:'complete',
      });
    });
  */
/*

describe('Order Model', () => {
  beforeAll(function () {
    spyOn(theOrder, 'create').and.returnValue(
      Promise.resolve({
    id: '1',
    userID:'1',
    status:'complete',
      })
    )
     });
});
*/


/*
it('create method should add order', async () => {
    
         const result = await theOrder.create({
        id: '1',
user_id:1,
    status:'complete',
    });
    expect(result).toBeDefined()
    
    })   
*/
/*
it('create method should add order', async () => {
const result = await theOrder.create({
        id: '1',
        user_id:1,
        status:'complete',
      });
        expect(result).toBeDefined()
    
    })   */
/*
afterAll(async()=>{
    const conn = await client.connect();
    const sql =
				"DELETE FROM orders WHERE status = 'complete' "; ;
			await conn.query(sql);
			conn.release();
})*/
