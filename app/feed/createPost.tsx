'use client'
import { useState } from 'react'
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { postSchema } from '../components/formSchema'
import { useForm } from 'react-hook-form'
// import * as z from 'zod'
import { postType } from '../components/formSchema'
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { addPost } from '../components/actions'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { revalidatePath } from 'next/cache'
import { Router } from 'next/router'
import { DialogClose } from '@radix-ui/react-dialog'

export function CreatePost() {
    const { data: session } = useSession()

    if (!session || !session.user) {
        redirect("api/auth/signin")

    }

    //1. define your form
    const postForm = useForm<postType>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            author: "",
            title: "",
            content: "",
            createdAt: new Date(),
            avatar: ""
        }
    })

    //2. define a submit handler
    async function onPublish(values: postType) {
        values.author = session?.user?.name ? session?.user?.name : "none"
        values.createdAt = new Date()
        values.avatar = session?.user?.image ? session?.user?.image : "none"
        // console.log(values)

        addPost(values).then(
            (result) => {
                if (result === true) {
                    postForm.reset()
                    //do a callback function that hides the dialog
                    // setTimeout(() => {
                           
                    // }, 1000);
                    setIsOpen(false)
                    
                    console.log("post done")
                } else {
                    console.log("post error")
                }
            }
        )
    }

    //controls the opening of dialog
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='con flex justify-center '>

            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <Button onClick={()=>setIsOpen(true)} variant="default">Create Post</Button>
                </DialogTrigger>
                <DialogContent >
                    <div className=' w-full' >
                        <Form {...postForm} >
                            <form onSubmit={postForm.handleSubmit(onPublish)}>
                                <FormField
                                    control={postForm.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title: </FormLabel>
                                            <Input placeholder='title' {...field} />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={postForm.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Content: </FormLabel>
                                            <Textarea placeholder='write your post here' {...field} />
                                            {/* <Input placeholder='write your post here' {...field} /> */}
                                        </FormItem>
                                    )}
                                />
                          
                                          <Button className='my-4' type='submit' >Publish</Button>
 
            
 
                            </form>
                        </Form>

                    </div>
                </DialogContent>
     
            </Dialog>



        </div>
    )
}
