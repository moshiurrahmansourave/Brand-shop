import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";


const Apple = () => {
    const appleProduct= useLoaderData();
    return (
        <div>

<div className="carousel w-full my-6 h-96">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/5FSN5L2/Screenshot-116.png" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/QD5QdgP/Screenshot-118.png" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4tqd0CL/QYoij-TSr5-Kdot7-CBteo-GD8-320-80.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>

             <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
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