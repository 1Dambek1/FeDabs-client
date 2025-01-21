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
    .min(1, { message: "Название кафедры не может быть пустым" })
    .max(20, { message: "Название кафедры не может быть больше 20 символов" }),
  headId: z.number().min(1, { message: "Заведующий не может быть пустым" })
})

type CreateDepartmentSchema = z.infer<typeof createDepartmentSchema>

const createGroupSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Название кафедры не может быть пустым" })
    .max(20, { message: "Название кафедры не может быть больше 20 символов" }),
  departmentId: z.number().min(1, { message: "Кафедра не может быть пустая" })
})

type CreateGroupSchema = z.infer<typeof createGroupSchema>

export {
  loginSchema,
  type LoginSchema,
  createDepartmentSchema,
  type CreateDepartmentSchema,
  createGroupSchema,
  type CreateGroupSchema
}
