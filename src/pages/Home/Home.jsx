import { useLoaderData } from "react-router-dom";
import Header from "../../shered/Header/Header";
import Brand from "./Brand";


const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div>
            
            <Header></Header>
           <div className="grid grid-cols-1 md:grid-cols-3 my-10">
           {
                brands.map(brand => <Brand 
                key={brand.id}
                brands ={brand}
                ></Brand>)
            }
           </div>
        </div>
    );
};

export default Home;