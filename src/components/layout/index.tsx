import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"
import { AppSidebar } from "@/components/layout/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

const queryClient = new QueryClient()

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="relative w-full">
            <SidebarTrigger className="p-4 sticky top-0 left-0 z-10 translate-x-0 m-2" />
            {children}
          </main>
        </SidebarProvider>
        <Toaster />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
