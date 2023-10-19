import { useLoaderData } from "react-router-dom";
import IntelCard from "./IntelCard";


const Intel = () => {
    const intelProduct= useLoaderData();
    return (
        <div>
             <div className="grid grid-cols-3 gap-3">
             {
                intelProduct.map(productIntel => <IntelCard
                key={productIntel._id}
                product={productIntel}
                ></IntelCard>)
            }
             </div>
        </div>
    );
};

export default Intel;