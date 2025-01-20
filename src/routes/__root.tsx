import Layout from '@/components/SideBar/layout'
import { Header } from '../components/SideBar/SideBar'
import { createRootRoute,  Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout/>

      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})