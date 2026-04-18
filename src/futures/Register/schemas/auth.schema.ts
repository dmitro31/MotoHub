import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().min(2, "Імʼя мінімум 2 символи"),
  email: z.string().email("Невірний email"),
  password: z.string().min(6, "Пароль мінімум 6 символів"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Паролі не співпадають",
  path: ["confirmPassword"]
})

export type RegisterFormData = z.infer<typeof registerSchema>