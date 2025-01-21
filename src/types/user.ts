export enum Role {
  Admin = "admin",
  HeadDepartment = "head-department",
  Methodist = "methodist",
  Student = "student",
  Teacher = "teacher"
}

export type UserHeadDepartment = {
  id: number
  email: string
  name: string
  surname: string
  dob: Date

  role: Role.HeadDepartment
  departmentHead: Department
}

export type UserTeacher = {
  id: number
  email: string
  name: string
  surname: string
  dob: Date

  role: Role.Teacher
  departmentTeacher: Department
}
export type User =
  | {
      id: number
      email: string
      name: string
      surname: string
      dob: Date

      role: Role
    }
  | UserHeadDepartment
  | UserTeacher

export type Project = {
  id: number
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export type Department = {
  id: number
  title: string
}

export type Group = {
  id: number
  title: string

  students: User[]
}
