import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Contact from "../pages/Contact";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            }
        ]
    },
    {
        path: "/*",
        Component: Error

    }

])