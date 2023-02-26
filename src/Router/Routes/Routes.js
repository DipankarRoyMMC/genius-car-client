import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRoute/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
            {
                path: '/products',
                element: <Products></Products>
            }
        ]
    }
]);

export default router;