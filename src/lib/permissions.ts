import type { Project, Role, User, Group } from "@/types/user"

type PermissionCheck<Key extends keyof Permissions> =
  | boolean
  | ((user: User, data: Permissions[Key]["dataType"]) => boolean)

type RolesWithPermission = {
  [R in Role]: Partial<{
    [Key in keyof Permissions]: Partial<{
      [Action in Permissions[Key]["action"]]: PermissionCheck<Key>
    }>
  }>
}

type Permissions = {
  user: {
    dataType: User
    action: "read" | "update" | "delete" | "create"
  }
  group: {
    dataType: Group
    action: "read" | "update" | "delete" | "create"
  }
  projects: {
    dataType: Project
    action: "create" | "read" | "update" | "delete"
  }
}

const ROLES = {
  admin: {
    projects: {
      create: true,
      read: true,
      update: true,
      delete: true
    }
  },
  "head-department": {
    projects: {
      create: true,
      read: true,
      update: true,
      delete: true
    }
  },
  methodist: {
    projects: {
      read: true
    }
  },
  student: {
    projects: {
      read: true
    }
  },
  teacher: {
    projects: {
      read: true,
      update: true
    }
  }
} as const satisfies RolesWithPermission

export function hasPermission<Resource extends keyof Permissions>(
  user: User,
  resource: Resource,
  action: Permissions[Resource]["action"],
  data?: Permissions[Resource]["dataType"]
) {
  const role = user.role

  const permission = (ROLES as RolesWithPermission)[role][resource]?.[action]
  if (permission === null || typeof permission === "undefined") return false

  if (typeof permission === "boolean") return permission
  return data != null && permission(user, data)
}
