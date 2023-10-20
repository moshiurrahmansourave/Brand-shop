import { useLoaderData } from "react-router-dom";
import IntelCard from "./IntelCard";


const Intel = () => {
    const intelProduct= useLoaderData();
    return (
        <div>

<div className="carousel w-full my-6 h-96">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/cgzmRYQ/Screenshot-123.png" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/hKp2y2d/Screenshot-124.png" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/3rVd7Rj/Screenshot-125.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>

             <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
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