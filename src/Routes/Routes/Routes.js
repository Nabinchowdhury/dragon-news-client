import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute/PrivateRoute";
import Regiser from "../../Pages/Register/Regiser";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://dragon-news-server-pink-one.vercel.app/news")
            },

            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-pink-one.vercel.app/category/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-pink-one.vercel.app/news/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/register",
                element: <Regiser></Regiser>,

            }
            ,
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>,

            }
        ]
    }
])

export default (routes)