export enum Role {
  Admin = "admin",
  HeadDepartment = "head-department",
  Methodist = "methodist",
  Student = "student",
  Teacher = "teacher"
}

export type UserStudent = {
  id: number
  email: string
  name: string
  surname: string
  dob: Date

  role: Role.Student
  group: Group
  project: Project
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
  theme: string
  desc: string
  comments: string[]
  rate: number
  student: UserStudent
  teacher: UserTeacher
}

export type Department = {
  id: number
  title: string
  groups: Group[]
  head: UserHeadDepartment
  teachers: UserTeacher[]
}

export type Group = {
  id: number
  title: string
  students: User[]
  department: Department
}
