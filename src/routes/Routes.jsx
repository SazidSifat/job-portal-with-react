import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch("/companies.json")
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path:'auth/login',
                Component: Login

            },
            {
                path:'auth/register',
                Component: Register

            },
            {
                path: '/company/:id',
                element: <h1>Company details</h1>,
                errorElement: Error
            }
        ]
    },
    {
        path: "/*",
        // Component: Error

    }

])