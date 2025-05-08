import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forget from "../pages/Auth/Forget";
import CompaniesDetails from "../component/CompaniesDetails/CompaniesDetails";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Loading from "../component/Loading/Loading";
import ItemNotFound from "../component/ItemNotFound/ItemNotFound";
import UpdateUser from "../component/UpdateUser/UpdateUser";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch("/companies.json"),
                hydrateFallbackElement: <Loading />
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
                path: 'auth/login',
                Component: Login
            },
            {
                path: 'auth/register',
                Component: Register

            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>

            },
            {
                path: "/profile/updateProfile",
                element: <UpdateUser />

            },
            {
                path: '/auth/forget',
                Component: Forget
            },
            {
                path: '/company/:id',
                element: <PrivateRoute><CompaniesDetails /></PrivateRoute>,
                loader: () => fetch("/companies.json"),
                hydrateFallbackElement: <Loading />,
                ErrorBoundary: ItemNotFound
            }
        ]
    },
    {
        path: "/*",
        // Component: Error

    }

])