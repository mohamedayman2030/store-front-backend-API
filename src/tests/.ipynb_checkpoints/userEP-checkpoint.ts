import supertest from 'supertest';
import app from '../server';
import {user,usersStore} from '../models/User';


const request = supertest(app)
let token:string;
const theUser:user={
    id:'3',
  firstName:'Mohamed',
        lastName:'Ayman',
        password:'123',
}

describe('test user endpoint responses',()=>{
    it("create user",async()=>{
        const response = await request.post('/users').send(theUser);
       // expect(response.body.firstName).toEqual('Mohamed');
        token=response.body
        expect(response.status).toBe(200)
    })
      it('index route for users',async ()=>{
        const response = await request.get('/users').set('Authorization', 'Bearer '+token);
        expect(response.body[0].lastname).toEqual('Ayman');
          
})
        it('show route for users',async ()=>{
        const response = await request.get('/users/3');
        expect(response.body.firstname).toEqual('Mohamed');
        
        })
    
});
    

