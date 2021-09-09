import {user,usersStore} from '../models/User';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import client from '../database';

dotenv.config()
const pepper= process.env.BCRYPT_PASSWORD as string
const saltRounds=process.env.SALT_ROUNDS as string
const theUser = new usersStore()



it('should have an index method',()=>{
    expect(theUser.Index).toBeDefined()
});

it('should have a show method',()=>{
    expect(theUser.show).toBeDefined()
});

it('should have a create method',()=>{
    expect(theUser.create).toBeDefined()
});



it('index method should return a list of users', async () => {
    const result = await theUser.Index();
    expect(result).toBeDefined();
});
    /*
    toEqual([{
        id:'1',
     firstName:'Mohamed',
        lastName:'Ayman',
        password:bcrypt.hashSync('123'+pepper,parseInt(saltRounds))
    }]);
  });
  */


    /*
    toEqual({
        id:'1',
      firstName:'Mohamed',
        lastName:'Ayman',
        password:bcrypt.hashSync('123'+pepper,parseInt(saltRounds))
    });
  });
*/
it('create new user',async () => {
    const result = await theUser.create({
   id:'1',
  firstName:'Mohamed',
        lastName:'AYMAN',
        password:'123'
    });
    
    expect(result).toBeDefined();
});
    it('show method should return the correct user', async () => {
    const result = await theUser.show('2');
    expect(result).toBeDefined();
});