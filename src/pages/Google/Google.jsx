import { useLoaderData } from "react-router-dom";
import Googlecard from "./Googlecard";



const Google = () => {
    const products= useLoaderData();
    
    return (
        <div>
            <div className="carousel w-full my-6 h-96">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/ZxQRvbc/5ecbf8b42645b67a18d322d9-hero-feature-main-full.jpg" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/KqJDShS/Screenshot-115.png" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/jfwmXjK/gsmarena-002.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
            
            <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
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