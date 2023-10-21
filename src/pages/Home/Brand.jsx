import { Link} from "react-router-dom";


const Brand = ({brands}) => {
    
    const {title, img} = brands;
    return (
        <div>
            <Link to={`/${title}`}>
            
            <div className="card glass m-4  shadow-xl">
  <figure><img className="lg:h-[284px] w-full" src={img} alt="brand" /></figure>
  <div className="card-body ">
    <h1 className="text-2xl font-bold text-center underline uppercase ">{title}</h1>
    <h1 className=" text-center  text-xl">Click to see brand product</h1>
  </div>
</div>
</Link>
        </div>
    );
};

export default Brand;