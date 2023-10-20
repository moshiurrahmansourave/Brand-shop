import { useLoaderData } from "react-router-dom";
import SamsungCard from "./SamsungCard";


const Samsung = () => {
    const samsungProduct= useLoaderData();
    return (
        <div>

<div className="carousel w-full my-6 h-96">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/2FnSMxS/Samsung-55-4-K-App-Banner-1-1.jpg" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src=" https://i.ibb.co/qNSrjvp/images-3.jpg" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/kBX8fRJ/Screenshot-120.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>

             <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
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