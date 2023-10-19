import { Link} from "react-router-dom";


const Brand = ({brands}) => {
    
    const {title, img} = brands;
    return (
        <div>
            <Link to={`/${title}`}>
            
            <div className="card m-4 bg-base-100 shadow-xl">
  <figure><img className="h-80 w-full" src={img} alt="brand" /></figure>
  <div className="card-body bg-slate-200">
    <h1 className="text-2xl ">{title}</h1>
  </div>
</div>
</Link>
        </div>
    );
};

export default Brand;