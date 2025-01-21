import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email({ message: "Инкорентный email адрес" }),
  password: z
    .string()
    .min(8, { message: "Пароль должен содержать не менее 8 символов" })
})

type LoginSchema = z.infer<typeof loginSchema>

const createDepartmentSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Название кафедры не может быть пустым" }),
  headId: z.number().min(1, { message: "Заведующий не может быть пустым" })
})

type CreateDepartmentSchema = z.infer<typeof createDepartmentSchema>

export {
  loginSchema,
  type LoginSchema,
  createDepartmentSchema,
  type CreateDepartmentSchema
}
