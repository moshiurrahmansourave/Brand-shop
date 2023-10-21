import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateSony = () => {

    const product = useLoaderData();
    const {_id, name, image, brand, type, price, description} =product;

    const handleUpdateProduct = e =>{
        e.preventDefault();

        const form = e.target;
        
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedProduct = { name, image, brand, type, price, description};
        console.log(updatedProduct)
        //sent data to the server
        fetch(`https://assignmen-10-brand-shop-server.vercel.app/${brand}/${_id}`,{
        
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire('Product update successfully')
            }
        })
    }

    return (
        <div>
            <div className="lg:mb-72 mb-14">
            <h2 className="text-4xl text-center underline font-bold mt-14 mb-4"> Update product of </h2>
            <p className="text-center text-xl font-bold">{name}</p>
            <form onSubmit={handleUpdateProduct}>
            <div className="lg:flex gap-4 ">
          <div className="md:w-1/2 mb-8">
            <p>Name</p>
            <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-full " required />
            </div>
            <div className="md:w-1/2 mb-8">
            <p>Image</p>
            <input type="text" name="image" defaultValue={image} placeholder="image url" className="input input-bordered w-full " required />
            </div>
          </div>
          <div className="lg:flex gap-4 ">
          <div className="md:w-1/2 mb-8">
            <p>Brand Name</p>
            <input type="text" name="brandName" defaultValue={brand} placeholder="Type here" className="input input-bordered w-full " required/>
            </div>
            <div className="md:w-1/2 mb-8">
            <p>Type</p>
            <input type="text" name="type" defaultValue={type} placeholder="Type here" className="input input-bordered w-full " required />
            </div>
          </div>
          <div className="lg:flex gap-4">
          <div className="md:w-1/2 mb-8">
            <p>Price</p>
            <input type="text" name="price" defaultValue={price} placeholder="Type here" className="input input-bordered w-full "required />
            </div>
            <div className="md:w-1/2 mb-8">
            <p>Short description</p>
            <input type="text" name="description" defaultValue={description} placeholder="Brand Name" className="input input-bordered w-full " required />
            </div>
          </div>
          
          <input type="submit" value="Update Product" className="btn  w-full my-7" />
            </form>
          
        </div>
        </div>
    );
};

export default UpdateSony;