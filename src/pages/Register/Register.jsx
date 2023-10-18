import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        createUser (email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
              <div className="lg:mb-96 mb-5 ">
           
           
           <div className=" card p-4 w-96 glass mx-auto relative mt-8">
           <div className="">
           <div className="flex items-center justify-between">
               <h2 className="card-title">Register</h2>
               
               
               
               </div>
               
   <form onSubmit={handleRegister} className="">
       <div className="form-control">
           <label className="label">
               <span className="label-text">Name</span>
           </label>
           <input name="name" type="Text" placeholder="name" className="input input-bordered" required />
       </div>
       <div className="form-control">
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
           <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
          
       </div>
       <div className="form-control mt-6">
           <button className="btn font-medium text-lg hover:bg-yellow-500 hover:text-white ">Register</button>
       </div>
       <div className="text-center mt-3">
        <p>If you have account </p>
           <p><Link className=" hover:underline font-bold" to="/login">
           Return to login
           </Link>
           </p>
       </div>
  </form>
           </div>
       </div>
       </div>
        </div>
    );
};

export default Register;