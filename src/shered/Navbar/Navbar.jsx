import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    //---------
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = e =>{
      if(e.target.checked){
        setTheme("dark");
      } else{
        setTheme("light")
      }
    }

    useEffect(()=>{
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme)
    },[theme])
//--------
    const handleSingOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <nav className="flex text-lg font-bold  lg:flex-row flex-col space-x-10">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct"> Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>

    </nav>

    return (
        <div>
            <div className="navbar glass ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div className="flex items-center">
    <a className=" text-violet-700 text-4xl font-bold">electro</a>
    <div className="flex items-center lg:flex-row flex-col">
    <div className="w-14 mt-3 hidden lg:flex">
      <img src="https://i.ibb.co/jwx9vCZ/landing-img-1.png" alt="" />
    </div>
    <div className="lg:mt-5 mt-4  ml-4">
    <input type="checkbox" onChange={handleToggle} className="toggle" />
    </div>
    </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className=" px-1">
     {navLinks}
    </ul>
  </div>
  
<div className="navbar-end flex ">

<div className=" mr-3 text-lg hidden lg:flex">
      {
        user && <p>{user?.email}</p>
      }
    </div>

    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-7 rounded-full">
          {
            user ?
              <img src={user.photoURL} />
              :
              <img src="https://i.ibb.co/jLvgVST/user.png" alt="" />
          }
        </div>
      </label>
    
{
    user ? 
    <button onClick={handleSingOut} className="btn btn-sm bg-violet-500 text-white">sing Out</button>
    :
    <Link to="/login">
    <p className="btn btn-sm bg-violet-500 text-white">Login</p>
    </Link>
  
  }
</div>
    
</div>

        </div>
    );
};

export default Navbar;