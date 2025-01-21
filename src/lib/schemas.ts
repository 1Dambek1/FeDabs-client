import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
})

type LoginSchema = z.infer<typeof loginSchema>

export { loginSchema, type LoginSchema }
