import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import hashPassword from '../helper/hashFuntion'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Generate a new UUID (Version 4)
const newGuid = uuidv4;

//login

const login = async(req:Request, res:Response) => {
    const logUser = req.body
    const User = await prisma.account.findFirst({where:{
        email:logUser.email,
        hash_password: hashPassword(req.body.password)
    }})

    if(User==null){
        res.status(404).json({message:'User not found'})
    } else if(User.isBan){
        res.status(403).json({message:'User is banned'})
    }

    res.status(200).json(User)
}

//Register
const register = async(req:Request, res:Response) => {
    const data = req.body

    const emailExist = await prisma.account.findFirst({where:{
        email:data.email,
    }})

    if(emailExist){
        res.status(400).json({message: 'Email already exists'})
    }

    const User = await prisma.account.create({data:{
        account_id: newGuid(),
        email:data.email,
        account_name:data.accountName,
        hash_password: hashPassword(data.password),
        created_date: new Date()
    }})

    res.status(200).json(User)
}

export {login, register}