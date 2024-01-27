import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import NewsCard from "../SharedPage/NewsCard/NewsCard";

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
    }
])


export default router;