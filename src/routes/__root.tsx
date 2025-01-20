import { Layout } from '@/components/layout'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
<<<<<<< HEAD
    <>
    <Layout/>


    
=======
    <Layout>
>>>>>>> 835e34a6bb2e4b020c01a49b48960f60d54f72c7
      <Outlet />
    </Layout>
  ),
})