import React from "react"
import Login from "../pages/Login"
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"
import Users from "../pages/Users"

interface IRouterProps {
  isLoggedIn: boolean
}

const Router = ({ isLoggedIn }: IRouterProps) => {
  const notAuthRoutes: RouteObject[] = [
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/auth" />,
    },
  ]

  const authRoutes: RouteObject[] = [
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "*",
      element: <Navigate to="/users" />,
    },
  ]

  const routes = createBrowserRouter(isLoggedIn ? authRoutes : notAuthRoutes)

  return <RouterProvider router={routes} />
}

export default Router
