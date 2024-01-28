import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import NewsCard from "../SharedPage/NewsCard/NewsCard";
import NewsDeatailLayOut from "../LayOut/NewsDetailLayOut";
import NewsDetailCard from "../SharedPage/NewsDetailCard/NewsDetailCard";

const router=createBrowserRouter([
    {
        path : '/',
        element:<Main></Main>,
        children :[
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
                element: <NewsDetailCard></NewsDetailCard>,
                loader : ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
])


export default router;