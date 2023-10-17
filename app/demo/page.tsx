import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function Post() {
    return (
        <div className=' flex justify-center'>
            <Card className=' sm:min-w-[800px]'>
            <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Author</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Content</p>
            </CardContent>
            <CardFooter>
                <p>Date: </p>
            </CardFooter>
            </Card>
           
        </div>
    )
}
