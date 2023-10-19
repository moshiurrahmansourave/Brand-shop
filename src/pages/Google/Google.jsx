import { useLoaderData } from "react-router-dom";
import Googlecard from "./Googlecard";



const Google = () => {
    const products= useLoaderData();
    return (
        <div>
            <h3 className="text-4xl">this is google {products.length}</h3>
            <div className="grid grid-cols-3 gap-7">
            {
                products.map(product => <Googlecard
                key={product._id}
                product={product}
                ></Googlecard>)
            }
            </div>
        </div>
    );
};

export default Google;