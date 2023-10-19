import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreatePost } from './createPost'
import PublishedPost from './post'
import { getPublishedPosts } from '../components/actions'
import { postType } from '../components/formSchema'
import { Pocket } from 'lucide-react'
import { prisma } from '../components/singletons'

export default async function Feed() {

    const object  = await prisma.post.findMany()
   // console.log(object)
    if(object === undefined) {
       return (  <h1> Error </h1>  )
    }

    const postsArray : postType[] = object
    
    return (
        <>
            <div className='flex justify-center'>
                <CreatePost />
            </div>
            {
                postsArray?.map( (post)=>{
                    return (
                        <>
                            <PublishedPost key={post.id} {...post} />
                        </>
                    )
                } )
            }
        </>
    )
}
