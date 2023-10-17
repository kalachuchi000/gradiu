import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { postType } from '../components/formSchema'

export default function PublishedPost(props : postType) {
    return (
        <div className=' flex justify-center'>
            <Card className=' sm:min-w-[800px]'>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>Author: {props.author} </CardDescription>
            </CardHeader>
            <CardContent>
                <p> {props.content}</p>
            </CardContent>
            <CardFooter>
                <p>Published at: {""+props.createdAt}</p>
            </CardFooter>
            </Card>
           
        </div>
    )
}
