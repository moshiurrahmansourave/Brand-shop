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
import GoogleDetailsPro from "../shered/Details/GoogleDetailsPro";
import AppleDetailsPro from "../shered/Details/AppleDetailsPro";
import SamsungDetailsPro from "../shered/Details/SamsungDetailsPro";
import SonyDetailsPro from "../shered/Details/SonyDetailsPro";
import IntelDetailsPro from "../shered/Details/IntelDetailsPro";
import AsusDetailsPro from "../shered/Details/AsusDetailsPro";
import UpdateApple from "../shered/Update/UpdateApple";
import UpdateSamsung from "../shered/Update/UpdateSamsung";
import UpdateSony from "../shered/Update/UpdateSony";
import UpdateGoogle from "../shered/Update/UpdateGoogle";
import UpdateIntel from "../shered/Update/UpdateIntel";
import UpdateAsus from "../shered/Update/UpdateAsus";




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
                loader:() => fetch('https://assignmen-10-brand-shop-server.vercel.app/google')
            },
            {
                path:'/asus',
                element:<Asus></Asus>,
                loader:() => fetch('https://assignmen-10-brand-shop-server.vercel.app/asus')
            },
            {
                path:'/apple',
                element: <Apple></Apple>,
                loader:() => fetch('https://assignmen-10-brand-shop-server.vercel.app/apple')
            },
            {
                path:'/sony',
                element:<Sony></Sony>,
                loader:() => fetch('https://assignmen-10-brand-shop-server.vercel.app/sony')
                
            },
            {
                path:'/samsung',
                element:<Samsung></Samsung>,
                loader:() => fetch('https://assignmen-10-brand-shop-server.vercel.app/samsung')
            },
            {
                path:'/intel',
                element:<Intel></Intel>,
                loader:() => fetch('https://assignmen-10-brand-shop-server.vercel.app/intel')
            },

            //----------------update---------------
            {
                path:'/updateGoogle/:id',
                element:<PrivateRoute><UpdateGoogle></UpdateGoogle></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/google/${params.id}`)
            },
            {
                path:'/updateApple/:id',
                element:<PrivateRoute><UpdateApple></UpdateApple></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/apple/${params.id}`)
            },
            {
                path:'/updateSamsung/:id',
                element:<PrivateRoute><UpdateSamsung></UpdateSamsung></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/samsung/${params.id}`)
            },
            {
                path:'/updateSony/:id',
                element:<PrivateRoute><UpdateSony></UpdateSony></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/sony/${params.id}`)
            },
            {
                path:'/updateIntel/:id',
                element:<PrivateRoute><UpdateIntel></UpdateIntel></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/intel/${params.id}`)
            },
            {
                path:'/updateAsus/:id',
                element:<PrivateRoute><UpdateAsus></UpdateAsus></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/asus/${params.id}`)
            },



            //_____________________________details__________________
            {
                path:'GoogleDetailsProduct/:id',
                element:<PrivateRoute>
                    <GoogleDetailsPro></GoogleDetailsPro>
                    </PrivateRoute>,
                loader:({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/google/${params.id}`)
            },
            {
                path:'AppleDetailsProduct/:id',
                element:<PrivateRoute>
                    <AppleDetailsPro></AppleDetailsPro>
                    </PrivateRoute>,
                loader:({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/apple/${params.id}`)
            },
            {
                path:'samsungDetailsProduct/:id',
                element:<PrivateRoute>
                    <SamsungDetailsPro></SamsungDetailsPro>
                    </PrivateRoute>,
                loader:({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/samsung/${params.id}`)
            },
            {
                path:'sonyDetailsProduct/:id',
                element:<PrivateRoute>
                    <SonyDetailsPro></SonyDetailsPro>
                </PrivateRoute>,
                loader:({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/sony/${params.id}`)
            },
            {
                path:'intelDetailsProduct/:id',
                element:<PrivateRoute>
                    <IntelDetailsPro></IntelDetailsPro>
                    </PrivateRoute>,
                loader:({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/intel/${params.id}`)
            },
            {
                path:'asusDetailsProduct/:id',
                element:<PrivateRoute>
                    <AsusDetailsPro></AsusDetailsPro>
                    </PrivateRoute>,
                loader:({params}) => fetch(`https://assignmen-10-brand-shop-server.vercel.app/asus/${params.id}`)
            },


            
          
            
            
        ]
    }
])

export default routes;