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

async function getPosts() {
    try{
      const res : Response = await fetch(`${process.env.NEXTAUTH_URL}/api/fetchPosts`, {cache: "no-cache",  method: "GET", 
        headers: {"Content-Type": "application/json"}})
      return await res.json()
      
    } catch (error) {
      //  console.log(error)
      return undefined
    }
  }

export default async function Feed() {
    const object  = await getPosts()
   // console.log(object)
    if(object === undefined) {
       return (  <h1> Error </h1>  )
    }
    // console.log("obj: "+object)
    // console.log("data:" + object.data)
    const postsArray : postType[] = object.data
    
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
