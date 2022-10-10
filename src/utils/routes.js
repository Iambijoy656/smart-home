import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";

import Home from '../components/Home'
import Main from "../components/Main";
import Shop from "../components/Shop";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('products.json'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },

            {
                path: 'shop',
                element: <Shop></Shop>
            },
            {
                path: 'about',
                element: <About></About>
            },
        ]

    },
])

export default router