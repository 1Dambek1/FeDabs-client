import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

const queryClient = new QueryClient()

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
