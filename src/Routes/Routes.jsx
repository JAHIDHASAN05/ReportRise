import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import NewsCard from "../SharedPage/NewsCard/NewsCard";
import NewsDeatailLayOut from "../LayOut/NewsDetailLayOut";
import NewsDetailCard from "../SharedPage/NewsDetailCard/NewsDetailCard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router=createBrowserRouter([
    {
        path : '/',
        element:<Main></Main>,
        children :[
            {
                path:'/',
                element :<NewsCard></NewsCard>,
                loader :()=> fetch(`http://localhost:5000/category/0`)
            },
                {
                     path :'/:id',
                     element:<NewsCard></NewsCard>,
                     loader : ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
                }
        ]
    },
    {
        path: '/news',
        element: <NewsDeatailLayOut></NewsDeatailLayOut>,
        children : [
            {
                path :':id',
                element: <PrivateRoutes><NewsDetailCard></NewsDetailCard></PrivateRoutes>,
                loader : ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path :'/register',
        element: <Register></Register>
    }
])


export default router;