import express, {Request,Response} from 'express';
import {order,orders} from '../models/Order';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
const theOrder = new orders()
const thesecret = process.env.TOKEN_SECRET as string

const createOrder = async (req:Request, res:Response) => {
   try{ const thenew= await theOrder.create({
        id:req.body.id,
       status:req.body.status,
        userID:req.body.userID,
        
    })
   res.json(thenew)
   }
    catch(err){
        res.status(400)
        res.json(err)
    }
}

const show = async (req:Request, res:Response) => {
    const target = await theOrder.show(req.params.id)
    try {
    const authorizationHeader = req.headers.authorization as string 
    const token = authorizationHeader.split(' ')[1]
    jwt.verify(token,thesecret)
    }
    catch(err){
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    res.json(target)
}

const addproduct = async (req:Request,res:Response ) => {
    const id=req.body.id
    const quantity=req.body.quantity
    const product_id=req.body.pd
    const order_id=req.body.od
    try {
    const theproducts = await theOrder.addproduct(id,quantity,product_id,order_id)
    res.json(theproducts)
    }
    catch(err){
        res.status(400)
    res.json(err)
    }
}

const orderRoutes = (app:express.Application) => {
    app.get('/orders/:id', show)
    app.post('/orders',createOrder)
}

export default orderRoutes