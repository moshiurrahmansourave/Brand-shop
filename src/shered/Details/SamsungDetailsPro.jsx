import { useLoaderData } from "react-router-dom";


const SamsungDetailsPro = () => {
    const updateSamsung = useLoaderData();
    const {_id, name, image, brand, type, price} =updateSamsung;
    return (
        <div>
            <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-6">
                <div className="col-span-2 bg-white">
                   <div className="mb-5">
                   <div className=" lg:mx-24">
                        <img className="w-full " src={image} alt="" />
                        <h2 className="text-3xl ml-3 font-semibold mt-4 mb-2">Details</h2>
                        <p className=" text-xl font-bold ml-3 ">Name: {name}</p>
                        <p className=" text-xl ml-3 font-bold">Brand: {brand}</p>
                        <p className=" text-xl ml-3 font-bold"> Price: {price} $</p>
                        <p className="btn w-full my-4  border-none rounded-2xl bg-teal-600 text-white font-semibold px-10">
                       Add to cart 
                      </p>
                        
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SamsungDetailsPro;