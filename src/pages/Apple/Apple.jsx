import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";


const Apple = () => {
    const appleProduct= useLoaderData();
    return (
        <div>
             <div className="grid grid-cols-3">
             {
                appleProduct.map(productApple => <AppleCard
                key={productApple._id}
                product={productApple}
                ></AppleCard>)
            }
             </div>
        </div>
    );
};

export default Apple;