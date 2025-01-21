import { Link } from "@tanstack/react-router"
import { AlignEndHorizontal, Cog, Home, LogIn } from "lucide-react"
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
import { useUser } from "@/hooks/use-user"
import { Role } from "@/types/user"
import { ModeToggle } from "../mode-toggle"

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
                        <span>Admin</span>
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
        <SidebarMenuItem className="flex gap-1">
          <SidebarMenuButton className="flex items-center justify-center py-6 border hover:bg-border">
            <Link to="/auth/login" className="flex items-center gap-1">
              <LogIn size={20} />
              <span className="text-xl">Вход</span>
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <ModeToggle className="aspect-square w-12 h-12 hover:bg-border" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  )
}
