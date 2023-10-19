import { useLoaderData } from "react-router-dom";
import SamsungCard from "./SamsungCard";


const Samsung = () => {
    const samsungProduct= useLoaderData();
    return (
        <div>
             <div className="grid grid-cols-3 gap-3">
             {
                samsungProduct.map(productSamsung => <SamsungCard
                key={productSamsung._id}
                product={productSamsung}
                ></SamsungCard>)
            }
             </div>
        </div>
    );
};

export default Samsung;