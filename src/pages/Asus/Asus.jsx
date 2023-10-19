import { useLoaderData } from "react-router-dom";
import AsusCard from "./AsusCard";


const Asus = () => {
    const asusProduct= useLoaderData();
    return (
        <div>
             <div className="grid grid-cols-3 gap-3">
             {
                asusProduct.map(productAsus => <AsusCard
                key={productAsus._id}
                product={productAsus}
                ></AsusCard>)
            }
             </div>
        </div>
    );
};

export default Asus;