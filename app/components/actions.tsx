'use server'
import { PrismaClient } from '@prisma/client';
import { postType } from './formSchema';
import { prisma } from './singletons';
import { revalidatePath } from 'next/cache';


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

export const clientRevalidatePath = async (stringPath : string) => {
    revalidatePath(stringPath)
}

export const getPublishedPosts = async ()=>{
    try{
        const data  = await prisma.post.findMany()
        return data
    }catch(err){
        console.log(err)
    }
}