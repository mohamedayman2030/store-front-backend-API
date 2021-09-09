import express, {Request, Response} from 'express';
import {user,usersStore} from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const theUser = new usersStore()
const thesecret = process.env.TOKEN_SECRET as string


const index = async (req:Request,res:Response)=> {
     try {
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(' ')[1]
    jwt.verify(token,thesecret)
    }
    catch(err){
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    const allUsers= await theUser.Index()
    res.json(allUsers)
}

const show = async (req:Request,res:Response)=>{
    const targetedUser = await theUser.show(req.params.id)
    res.json(targetedUser)
}

const create = async (req:Request, res:Response)=> {
    try {
        const ourUser:user = {
            id:req.body.id,
            firstName: req.body.firstName,
           lastName: req.body.lastName,
           password:req.body.password,
            
        };
        const newUser = await theUser.create(ourUser)
        const token  = jwt.sign({user:newUser},thesecret)
        res.json(token)
        res.status(200)
        }
    catch(err){
        res.status(400)
        res.json(err)
    }
}
/*
const authenticate =  async(req:Request,res:Response)=> {
    const u:user = {
        username:req.body.username,
        password:req.body.password,
    }
    try {
    const the_user = await theUser.authenticate(u.username,u.password)
    var token = jwt.token.sign({ user: u }, process.env.TOKEN_SECRET);
        res.json(token)
    }
    catch(err){
        res.status(401)
        res.json(err)
    }
}*/


const userRoutes = (app:express.Application)=> {
    app.get('/users',index)
    app.get('/users/:id',show)
    app.post('/users',create)
}

export default userRoutes;