import {  z } from "zod"

export const loginSchema = z.object({
    email: z.string().email("Error Email"),
    password: z.string().min(6 , "Password Error")
})

export type loginFormData = z.infer<typeof loginSchema>