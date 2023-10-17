'use server'
import { PrismaClient } from '@prisma/client';
import { postType } from './formSchema';
const prisma = new PrismaClient

export const addPost = async (values: postType)=>{
    try{
        await prisma.post.create({
            data: values
        })
        console.log("add success")
        return true
    }catch(err){
        console.log(err)
        return false
       
    }
}

export const getPublishedPosts = async ()=>{
    try{
        const data  = await prisma.post.findMany()
        return data
    }catch(err){
        console.log(err)
    }
}