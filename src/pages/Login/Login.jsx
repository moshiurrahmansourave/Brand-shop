import { Link } from "react-router-dom";

import {  FaGoogle,  } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {singIn} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        singIn(email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="lg:mb-96 mb-5 ">
        <div className="card w-96 glass mx-auto my-6 ">
            <div className="p-3">
                <div className="flex items-center justify-between">
                <h2 className="card-title">Login form</h2>
                </div>
                
    <form onSubmit={handleLogin} className="">
        <div className="form-control mb-4">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-outline  hover:text-white ">Login</button>
        </div>

        <div className="flex items-center justify-between mx-4 mt-3">
        <p><Link className="  hover:underline" to="">Lost password?</Link></p>
            
        <p><Link className=" hover:underline" to="/register">Create an account</Link></p>
        </div>

        <div>
            <h1 className="text-lg font-semibold text-center mt-2">Login with</h1>
            <button  className="btn btn-outline w-full font-medium text-lg mb-2 hover:text-white ">
                <FaGoogle className='text-lg'></FaGoogle>
                Google
            </button>
            
            </div>
   </form>
            </div>
        </div>
        </div>
    );
};

export default Login;