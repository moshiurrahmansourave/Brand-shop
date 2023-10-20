import Swal from "sweetalert2";



const AddProduct = () => {
    const handleAddProduct = e =>{
        e.preventDefault();

        const form = e.target;
        
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;

        const newProduct = { name, image, brand, type, price, description};
        console.log(newProduct)
        //sent data to the server
        fetch(`http://localhost:5000/${brand}`,{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire('SweetAlert2 is working!')
            }
        })
    }
    return (
        <div className="lg:mb-72 mb-14">
            <h2 className="text-4xl text-center underline font-bold mt-14 mb-4">  add product</h2>
            <form onSubmit={handleAddProduct}>
            <div className="lg:flex gap-4 ">
          <div className="md:w-1/2 mb-8">
            <p>Name</p>
            <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full " required />
            </div>
            <div className="md:w-1/2 mb-8">
            <p>Image</p>
            <input type="text" name="image" placeholder="image url" className="input input-bordered w-full " required />
            </div>
          </div>
          <div className="lg:flex gap-4 ">
          <div className="md:w-1/2 mb-8">
            <p>Brand Name</p>
            <input type="text" name="brandName" placeholder="Type here" className="input input-bordered w-full " required/>
            </div>
            <div className="md:w-1/2 mb-8">
            <p>Type</p>
            <input type="text" name="type" placeholder="Type here" className="input input-bordered w-full " required />
            </div>
          </div>
          <div className="lg:flex gap-4">
          <div className="md:w-1/2 mb-8">
            <p>Price</p>
            <input type="text" name="price" placeholder="Type here" className="input input-bordered w-full "required />
            </div>
            <div className="md:w-1/2 mb-8">
            <p>Short description</p>
            <input type="text" name="description" placeholder="Brand Name" className="input input-bordered w-full " required />
            </div>
          </div>
          
          <input type="submit" value="Add Product" className="btn  w-full my-7" />
            </form>
          
        </div>
    );
};

export default AddProduct;