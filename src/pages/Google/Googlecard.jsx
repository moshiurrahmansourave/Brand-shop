import {  FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Googlecard = ({product}) => {
    const {_id, name, image, brand, type, price} =product;

    

    return (
        <div>
      <div className=" rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 mb-16 p-3 bg-teal-100 ">
  <figure><img className="w-full lg:h-96" src={image} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-teal-600 text-white font-semibold">
            {price} $
            </p>
  <div className="mx-7">
   <div className="flex items-end justify-between">
   <h2 className="text-xl font-medium mt-2">
      {name}
    </h2>
    <div className="flex items-end gap-2">
    <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star"/>
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  
</div>
      {brand}</div>
   </div>
      <div className=" flex justify-between items-center mt-6">
        <div>
        <Link to={`/GoogleDetailsProduct/${_id}`}>
        <p className="btn btn-sm border-none rounded-2xl bg-teal-600 text-white font-semibold px-10">
            Deatails
            </p>
        </Link>
        </div>

        <Link to={`/updateGoogle/${_id}`}>
        <button className="btn btn-sm border-none rounded-2xl bg-teal-600 text-white font-semibold px-10 ">
           <FaPencilAlt></FaPencilAlt> Update
            </button>
            </Link>
      </div>
     
      
    
  </div>
       </div>
        </div>
    );
};

export default Googlecard;