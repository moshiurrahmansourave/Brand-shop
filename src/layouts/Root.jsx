import { Outlet } from "react-router-dom";
import Navbar from "../shered/Navbar/Navbar";
import Footer from "../shered/Footer/Footer";


const Root = () => {
    return (
        <div className="px-6 mx-auto border">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;