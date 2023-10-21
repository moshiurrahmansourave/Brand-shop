import { Outlet } from "react-router-dom";
import Navbar from "../shered/Navbar/Navbar";
import Footer from "../shered/Footer/Footer";


const Root = () => {
    return (
        <div className="">
            <div className="mx-auto max-w-screen-2xl ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;