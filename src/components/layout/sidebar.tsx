import { Link } from "@tanstack/react-router"
import { AlignEndHorizontal, Cog, Home, LogIn } from "lucide-react"
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
                  <SidebarMenuButton asChild>
                    <Link to="/admin">
                      <Cog className="mr-2" />
                      <span>Admin</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : null}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="">
        <SidebarMenuItem>
          <SidebarMenuButton className="flex items-center justify-center py-6 border-t-2">
            <Link to="/auth/register" className="flex items-center gap-2">
              <LogIn />
              <span className="text-xl">Login</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  )
}
