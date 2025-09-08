import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import Statistics from "../features/statistics/pages/Statistics"
import User from "../features/user/pages/User"
import Product from "../features/product/pages/Product"
const DashboardLayout = lazy(()=> import("../layout/DashboardLayout"))
const Auth = lazy(()=> import("../features/auth/pages/Auth"))
const Register = lazy(()=> import("../features/auth/pages/Register"))
const Login = lazy(()=> import("../features/auth/pages/Login"))

const AppRoutes = () => {
  return (
    useRoutes([
        {path: "/", element: <Auth/>, children: [
            {path: "/dashboard", element:<DashboardLayout/>, children: [
                {index: true, element: <Statistics/>},
                {path: "user", element: <User/>},
                {path: "product", element: <Product/>}
            ]}
        ]},
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>}
    ])
  )
}

export default AppRoutes