"use client"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export const postSchema = z.object({
    author: z.string(),
    title : z.string().min(1, "Title Needed").max(30,"Title can't be too long"),
    content : z.string().max(200, "200 character limit"),
     createdAt : z.date(),
    avatar : z.string()
})

export interface postType extends z.infer<typeof postSchema> {
    id : number;
}