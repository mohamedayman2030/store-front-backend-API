import express , {Request,Response} from 'express';
import {product,products} from '../models/Product';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const theProduct = new products()
const thesecret = process.env.TOKEN_SECRET as string

const index = async (_req:Request,res:Response)=> {
    const theProducts =await  theProduct.Index()
    res.json(theProducts)
}

const show = async (req:Request,res:Response)=> {
    const target = await theProduct.show(req.params.id )
    res.json(target)
}

const create = async (req:Request,res:Response)=> {
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
    try { const newProduct:product = {
        id:req.body.id,
        name:req.body.name,
        price:req.body.price,
    }
    const newOne= await theProduct.create(newProduct)
    res.json(newOne) }
    catch(err){
        res.status(400)
        res.json(err)
    }
}


const productRoutes = (app:express.Application) => {
    app.get('/product',index)
    app.get('/product/:id',show)
    app.post('/product',create)
    
}

export default productRoutes