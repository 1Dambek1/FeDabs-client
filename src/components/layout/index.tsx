import { AppSidebar } from "@/components/layout/sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
 
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}