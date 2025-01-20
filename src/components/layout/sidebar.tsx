import { Link } from "@tanstack/react-router"
import {
  AlignEndHorizontal,
  Calendar,
  Home,
  Inbox,
  LogIn,
  Search,
  Settings
} from "lucide-react"
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

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar
  },
  {
    title: "Search",
    url: "#",
    icon: Search
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 rounded-none text-2xl font-bold border-b-2 py-5  border-sidebar-accent">
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className=""></SidebarFooter>
      <SidebarMenuItem>
        <SidebarMenuButton className="hover:text-white  flex items-center justify-center py-6 border-t-2 border-sidebar-accent ">
          <Link to="/" className="flex items-center gap-2">
            <LogIn />
            <span className="text-xl">Login</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </Sidebar>
  )
}
