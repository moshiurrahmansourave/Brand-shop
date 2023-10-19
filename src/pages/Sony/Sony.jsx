import { useLoaderData } from "react-router-dom";
import SonyCard from "./SonyCard";


const Sony = () => {
    const sonyProduct= useLoaderData();
    return (
        <div>
             <div className="grid grid-cols-3 gap-3">
             {
                sonyProduct.map(productSony => <SonyCard
                key={productSony._id}
                product={productSony}
                ></SonyCard>)
            }
             </div>
        </div>
    );
};

export default Sony;