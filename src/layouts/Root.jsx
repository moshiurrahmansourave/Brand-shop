import { Outlet } from "react-router-dom";
import Navbar from "../shered/Navbar/Navbar";


const Root = () => {
    return (
        <div className="px-6 mx-auto border">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;