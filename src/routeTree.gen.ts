/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminImport } from './routes/_admin'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AdminTeachersIndexImport } from './routes/admin/teachers/index'
import { Route as AdminStudentsIndexImport } from './routes/admin/students/index'
import { Route as AdminGroupsIndexImport } from './routes/admin/groups/index'
import { Route as AdminDepartmentsIndexImport } from './routes/admin/departments/index'
import { Route as AdminGroupsGroupIdImport } from './routes/admin/groups/$groupId'
import { Route as AdminDepartmentsDepartmentIdImport } from './routes/admin/departments/$departmentId'

// Create/Update Routes

const AdminRoute = AdminImport.update({
  id: '/_admin',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  id: '/profile/',
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  id: '/admin/',
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AdminTeachersIndexRoute = AdminTeachersIndexImport.update({
  id: '/admin/teachers/',
  path: '/admin/teachers/',
  getParentRoute: () => rootRoute,
} as any)

const AdminStudentsIndexRoute = AdminStudentsIndexImport.update({
  id: '/admin/students/',
  path: '/admin/students/',
  getParentRoute: () => rootRoute,
} as any)

const AdminGroupsIndexRoute = AdminGroupsIndexImport.update({
  id: '/admin/groups/',
  path: '/admin/groups/',
  getParentRoute: () => rootRoute,
} as any)

const AdminDepartmentsIndexRoute = AdminDepartmentsIndexImport.update({
  id: '/admin/departments/',
  path: '/admin/departments/',
  getParentRoute: () => rootRoute,
} as any)

const AdminGroupsGroupIdRoute = AdminGroupsGroupIdImport.update({
  id: '/admin/groups/$groupId',
  path: '/admin/groups/$groupId',
  getParentRoute: () => rootRoute,
} as any)

const AdminDepartmentsDepartmentIdRoute =
  AdminDepartmentsDepartmentIdImport.update({
    id: '/admin/departments/$departmentId',
    path: '/admin/departments/$departmentId',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_admin': {
      id: '/_admin'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/departments/$departmentId': {
      id: '/admin/departments/$departmentId'
      path: '/admin/departments/$departmentId'
      fullPath: '/admin/departments/$departmentId'
      preLoaderRoute: typeof AdminDepartmentsDepartmentIdImport
      parentRoute: typeof rootRoute
    }
    '/admin/groups/$groupId': {
      id: '/admin/groups/$groupId'
      path: '/admin/groups/$groupId'
      fullPath: '/admin/groups/$groupId'
      preLoaderRoute: typeof AdminGroupsGroupIdImport
      parentRoute: typeof rootRoute
    }
    '/admin/departments/': {
      id: '/admin/departments/'
      path: '/admin/departments'
      fullPath: '/admin/departments'
      preLoaderRoute: typeof AdminDepartmentsIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/groups/': {
      id: '/admin/groups/'
      path: '/admin/groups'
      fullPath: '/admin/groups'
      preLoaderRoute: typeof AdminGroupsIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/students/': {
      id: '/admin/students/'
      path: '/admin/students'
      fullPath: '/admin/students'
      preLoaderRoute: typeof AdminStudentsIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/teachers/': {
      id: '/admin/teachers/'
      path: '/admin/teachers'
      fullPath: '/admin/teachers'
      preLoaderRoute: typeof AdminTeachersIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AdminRoute
  '/auth/login': typeof AuthLoginRoute
  '/admin': typeof AdminIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/admin/departments/$departmentId': typeof AdminDepartmentsDepartmentIdRoute
  '/admin/groups/$groupId': typeof AdminGroupsGroupIdRoute
  '/admin/departments': typeof AdminDepartmentsIndexRoute
  '/admin/groups': typeof AdminGroupsIndexRoute
  '/admin/students': typeof AdminStudentsIndexRoute
  '/admin/teachers': typeof AdminTeachersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AdminRoute
  '/auth/login': typeof AuthLoginRoute
  '/admin': typeof AdminIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/admin/departments/$departmentId': typeof AdminDepartmentsDepartmentIdRoute
  '/admin/groups/$groupId': typeof AdminGroupsGroupIdRoute
  '/admin/departments': typeof AdminDepartmentsIndexRoute
  '/admin/groups': typeof AdminGroupsIndexRoute
  '/admin/students': typeof AdminStudentsIndexRoute
  '/admin/teachers': typeof AdminTeachersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_admin': typeof AdminRoute
  '/auth/login': typeof AuthLoginRoute
  '/admin/': typeof AdminIndexRoute
  '/profile/': typeof ProfileIndexRoute
  '/admin/departments/$departmentId': typeof AdminDepartmentsDepartmentIdRoute
  '/admin/groups/$groupId': typeof AdminGroupsGroupIdRoute
  '/admin/departments/': typeof AdminDepartmentsIndexRoute
  '/admin/groups/': typeof AdminGroupsIndexRoute
  '/admin/students/': typeof AdminStudentsIndexRoute
  '/admin/teachers/': typeof AdminTeachersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/auth/login'
    | '/admin'
    | '/profile'
    | '/admin/departments/$departmentId'
    | '/admin/groups/$groupId'
    | '/admin/departments'
    | '/admin/groups'
    | '/admin/students'
    | '/admin/teachers'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/auth/login'
    | '/admin'
    | '/profile'
    | '/admin/departments/$departmentId'
    | '/admin/groups/$groupId'
    | '/admin/departments'
    | '/admin/groups'
    | '/admin/students'
    | '/admin/teachers'
  id:
    | '__root__'
    | '/'
    | '/_admin'
    | '/auth/login'
    | '/admin/'
    | '/profile/'
    | '/admin/departments/$departmentId'
    | '/admin/groups/$groupId'
    | '/admin/departments/'
    | '/admin/groups/'
    | '/admin/students/'
    | '/admin/teachers/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AdminRoute: typeof AdminRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AdminIndexRoute: typeof AdminIndexRoute
  ProfileIndexRoute: typeof ProfileIndexRoute
  AdminDepartmentsDepartmentIdRoute: typeof AdminDepartmentsDepartmentIdRoute
  AdminGroupsGroupIdRoute: typeof AdminGroupsGroupIdRoute
  AdminDepartmentsIndexRoute: typeof AdminDepartmentsIndexRoute
  AdminGroupsIndexRoute: typeof AdminGroupsIndexRoute
  AdminStudentsIndexRoute: typeof AdminStudentsIndexRoute
  AdminTeachersIndexRoute: typeof AdminTeachersIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminRoute: AdminRoute,
  AuthLoginRoute: AuthLoginRoute,
  AdminIndexRoute: AdminIndexRoute,
  ProfileIndexRoute: ProfileIndexRoute,
  AdminDepartmentsDepartmentIdRoute: AdminDepartmentsDepartmentIdRoute,
  AdminGroupsGroupIdRoute: AdminGroupsGroupIdRoute,
  AdminDepartmentsIndexRoute: AdminDepartmentsIndexRoute,
  AdminGroupsIndexRoute: AdminGroupsIndexRoute,
  AdminStudentsIndexRoute: AdminStudentsIndexRoute,
  AdminTeachersIndexRoute: AdminTeachersIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_admin",
        "/auth/login",
        "/admin/",
        "/profile/",
        "/admin/departments/$departmentId",
        "/admin/groups/$groupId",
        "/admin/departments/",
        "/admin/groups/",
        "/admin/students/",
        "/admin/teachers/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_admin": {
      "filePath": "_admin.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/admin/": {
      "filePath": "admin/index.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    },
    "/admin/departments/$departmentId": {
      "filePath": "admin/departments/$departmentId.tsx"
    },
    "/admin/groups/$groupId": {
      "filePath": "admin/groups/$groupId.tsx"
    },
    "/admin/departments/": {
      "filePath": "admin/departments/index.tsx"
    },
    "/admin/groups/": {
      "filePath": "admin/groups/index.tsx"
    },
    "/admin/students/": {
      "filePath": "admin/students/index.tsx"
    },
    "/admin/teachers/": {
      "filePath": "admin/teachers/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
