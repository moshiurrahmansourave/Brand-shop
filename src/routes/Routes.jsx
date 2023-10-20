import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Google from "../pages/Google/Google";
import Asus from "../pages/Asus/Asus";
import Sony from "../pages/Sony/Sony";
import Samsung from "../pages/Samsung/Samsung";
import Intel from "../pages/Intel/Intel";
import Apple from "../pages/Apple/Apple";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../shered/UpdateProduct/UpdateProduct";
import GoogleDetailsPro from "../shered/Details/GoogleDetailsPro";
import AppleDetailsPro from "../shered/Details/AppleDetailsPro";
import SamsungDetailsPro from "../shered/Details/SamsungDetailsPro";
import SonyDetailsPro from "../shered/Details/SonyDetailsPro";
import IntelDetailsPro from "../shered/Details/IntelDetailsPro";
import AsusDetailsPro from "../shered/Details/AsusDetailsPro";






const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:() => fetch('/service.json')
            },
            {
                path:'/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/mycart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/google',
                element:<Google></Google>,
                loader:() => fetch('http://localhost:5000/google')
            },
            {
                path:'/asus',
                element:<Asus></Asus>,
                loader:() => fetch('http://localhost:5000/asus')
            },
            {
                path:'/apple',
                element: <Apple></Apple>,
                loader:() => fetch('http://localhost:5000/apple')
            },
            {
                path:'/sony',
                element:<Sony></Sony>,
                loader:() => fetch('http://localhost:5000/sony')
                
            },
            {
                path:'/samsung',
                element:<Samsung></Samsung>,
                loader:() => fetch('http://localhost:5000/samsung')
            },
            {
                path:'/intel',
                element:<Intel></Intel>,
                loader:() => fetch('http://localhost:5000/intel')
            },
            {
                path:'/updateProduct/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/google/${params.id}`)
            },
            {
                path:'GoogleDetailsProduct/:id',
                element:<GoogleDetailsPro></GoogleDetailsPro>,
                loader:({params}) => fetch(`http://localhost:5000/google/${params.id}`)
            },
            {
                path:'AppleDetailsProduct/:id',
                element:<AppleDetailsPro></AppleDetailsPro>,
                loader:({params}) => fetch(`http://localhost:5000/apple/${params.id}`)
            },
            {
                path:'samsungDetailsProduct/:id',
                element:<SamsungDetailsPro></SamsungDetailsPro>,
                loader:({params}) => fetch(`http://localhost:5000/samsung/${params.id}`)
            },
            {
                path:'sonyDetailsProduct/:id',
                element:<SonyDetailsPro></SonyDetailsPro>,
                loader:({params}) => fetch(`http://localhost:5000/sony/${params.id}`)
            },
            {
                path:'intelDetailsProduct/:id',
                element:<IntelDetailsPro></IntelDetailsPro>,
                loader:({params}) => fetch(`http://localhost:5000/intel/${params.id}`)
            },
            {
                path:'asusDetailsProduct/:id',
                element:<AsusDetailsPro></AsusDetailsPro>,
                loader:({params}) => fetch(`http://localhost:5000/asus/${params.id}`)
            },


            
          
            
            
        ]
    }
])

export default routes;