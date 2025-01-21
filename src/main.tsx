import {
  createRouter,
  NotFoundRoute,
  RouterProvider
} from "@tanstack/react-router"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { NotFound } from "./components/not-found.tsx"
import "./index.css"
import { routeTree } from "./routeTree.gen"
import { Route as rootRoute } from "./routes/__root.tsx"

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: NotFound
})

const router = createRouter({ routeTree, notFoundRoute })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
