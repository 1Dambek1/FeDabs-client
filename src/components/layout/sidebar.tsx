import { useQueryClient } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import {
  AlignEndHorizontal,
  Cog,
  Home,
  LogIn,
  LogOut,
  User
} from "lucide-react"
import { motion } from "motion/react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { toast } from "@/hooks/use-toast"
import { useUser } from "@/hooks/use-user"
import { Role } from "@/types/user"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../mode-toggle"
import { Skeleton } from "../ui/skeleton"
import { logout as logoutAction } from "@/api/auth"

// Menu items.
const items = [
  {
    title: "Личный кабинет",
    url: "/profile",
    icon: Home
  }
]

export function AppSidebar() {
  const { data: user, isLoading } = useUser()
  const queryClient = useQueryClient()

  const logout = () => {
    logoutAction()
    queryClient.invalidateQueries({ queryKey: ["user"] })
    toast({
      title: "Вы успешно вышли из системы!"
    })
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 rounded-none text-2xl font-bold border-b-2 py-5">
            <AlignEndHorizontal className="mr-2" size={200} />
            FeDabs
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {!isLoading && user?.role === Role.Admin ? (
                <SidebarMenuItem>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <SidebarMenuButton asChild>
                      <Link to="/admin">
                        <Cog />
                        <span>Панель управления</span>
                      </Link>
                    </SidebarMenuButton>
                  </motion.div>
                </SidebarMenuItem>
              ) : null}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="">
        <SidebarMenuItem
          className={cn("flex justify-end gap-1 items-center", {
            "justify-between": isLoading
          })}
        >
          {isLoading ? (
            <div className="animate-pulse rounded-md border flex gap-2 border-primary/10 w-full h-full px-2 py-3">
              <Skeleton className="w-7 h-7 aspect-square rounded-full" />
              <div className="flex flex-col justify-between w-full">
                <Skeleton className="w-full h-2" />
                <Skeleton className="w-1/3 h-2" />
              </div>
            </div>
          ) : user === undefined ? (
            <SidebarMenuButton className="flex items-center justify-center py-6 border hover:bg-border">
              <Link to="/auth/login" className="flex items-center gap-1">
                <LogIn size={20} />
                <span className="text-xl">Вход</span>
              </Link>
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton className="px-2 py-4 flex gap-2 items-center justify-between">
              <User size={40} />
              <div className="flex flex-col justify-between w-full text-sm">
                <p>{user.name}</p>
                <p className="text-xs text-foreground/80">{user.email}</p>
              </div>
              <button onClick={logout}>
                <LogOut size={20} />
              </button>
            </SidebarMenuButton>
          )}
          <SidebarMenuButton asChild>
            <ModeToggle className="aspect-square w-12 h-12 hover:bg-border" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  )
}
