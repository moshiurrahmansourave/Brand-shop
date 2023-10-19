import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSingOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <nav className="flex lg:flex-row flex-col space-x-10">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct"> Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
       
        
        

    </nav>

    return (
        <div>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-end hidden lg:flex mr-10">
    <ul className=" px-1">
     {navLinks}
    </ul>
  </div>
  
  {
    user ? 
    <button onClick={handleSingOut} className="btn">sing Out</button>
    :
    <Link to="/login">
    <p className="btn">Login</p>
    </Link>
  
  }

    
</div>
        </div>
    );
};

export default Navbar;