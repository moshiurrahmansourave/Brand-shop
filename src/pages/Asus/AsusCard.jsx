

const AsusCard = ({product}) => {
    const { name, image, brand, type, price, description} =product;
    return (
        <div>
            <div>
      <div className="  bg-base-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 mb-16 ">
  <figure><img className="w-full lg:h-[284px]" src={image} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            {price}
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
      {name}
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"> {brand}</p>
        </div>

      </div>
      
    
  </div>
       </div>
        </div>
        </div>
    );
};

export default AsusCard;