/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AdminDepartmentsDepartmentIdImport } from './routes/admin/departments/$departmentId'

// Create/Update Routes

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
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/admin': typeof AdminIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/admin/departments/$departmentId': typeof AdminDepartmentsDepartmentIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/admin': typeof AdminIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/admin/departments/$departmentId': typeof AdminDepartmentsDepartmentIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth/login': typeof AuthLoginRoute
  '/admin/': typeof AdminIndexRoute
  '/profile/': typeof ProfileIndexRoute
  '/admin/departments/$departmentId': typeof AdminDepartmentsDepartmentIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth/login'
    | '/admin'
    | '/profile'
    | '/admin/departments/$departmentId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth/login'
    | '/admin'
    | '/profile'
    | '/admin/departments/$departmentId'
  id:
    | '__root__'
    | '/'
    | '/auth/login'
    | '/admin/'
    | '/profile/'
    | '/admin/departments/$departmentId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AdminIndexRoute: typeof AdminIndexRoute
  ProfileIndexRoute: typeof ProfileIndexRoute
  AdminDepartmentsDepartmentIdRoute: typeof AdminDepartmentsDepartmentIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthLoginRoute: AuthLoginRoute,
  AdminIndexRoute: AdminIndexRoute,
  ProfileIndexRoute: ProfileIndexRoute,
  AdminDepartmentsDepartmentIdRoute: AdminDepartmentsDepartmentIdRoute,
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
        "/auth/login",
        "/admin/",
        "/profile/",
        "/admin/departments/$departmentId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
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
    }
  }
}
ROUTE_MANIFEST_END */
