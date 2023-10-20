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
           {/* extra section */}
           <h1 className="text-5xl text-center my-3">
            Import - Customize - Publish </h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  px-36 py-14 gap-8 bg-gray-200 mb-7">
            {/* 1 card */}
           <div>
                <img src="https://i.ibb.co/kcb3YG0/landing-icon-1.png" alt="" />
                <h2 className="text-3xl font-medium">1-click import</h2>
                <p className="text-xl">Get the entire Otaru demo content with just a <br /> single click of your mouse.</p>
           </div>
            {/* 2 card */}
           <div>
                <img src="https://i.ibb.co/7kB6YtK/landing-icon-2.png" alt="" />
                <h2 className="text-3xl font-medium">Layouts</h2>
                <p className="text-xl">Vast collection of bold, beautifully <br /> crafted site demos and page examples.</p>
           </div>
            {/* 3 card */}
           <div>
                <img src="https://i.ibb.co/K27xW16/landing-icon-3.png" alt="" />
                <h2 className="text-3xl font-medium">Elementor</h2>
                <p className="text-xl">The easy way to build and edit your <br /> pages - fully compatible with Elementor.</p>
           </div>
            {/* 4 card */}
           <div>
                <img src="https://i.ibb.co/bK2LwwJ/landing-icon-4.png" alt="" />
                <h2 className="text-3xl font-medium">Flexibility</h2>
                <p className="text-xl">Customize every aspect of your site, <br /> including colors, typography & lots more.</p>
           </div>
            {/* 5 card */}
           <div>
                <img src="https://i.ibb.co/dfdcMLS/landing-icon-5.png" alt="" />
                <h2 className="text-3xl font-medium">Responsive</h2>
                <p className="text-xl">Developed to look absolutely stunning <br /> on all screen types and display sizes.</p>
           </div>
            {/* 6 card */}
           <div>
                <img src="https://i.ibb.co/dcV61bp/landing-icon-6.png" alt="" />
                <h2 className="text-3xl font-medium">Help center</h2>
                <p className="text-xl">Browse comprehensive knowledge <br /> base articles or reach out to our support..</p>
           </div>
           </div>
           
           {/* extra section  2*/}
           <p className="text-5xl font-bold text-center items-center my-12">choose your product and <br /> stay happy</p>
           <div className="flex  lg:flex-row flex-col bg-slate-200 mb-12">
            <div className="w-1/2">
                <img src="https://i.ibb.co/6DPTh4k/da-banner-3-1.png" alt="" />
            </div>
            <div className="w-1/2 mt-28">

                <h2 className="text-4xl font-semibold mb-10">Television Entertainment</h2>
                <p className="text-xl">Now, the television is in a very improved form. People were thrilled to hear the voice as well as see the picture across thousands of miles live. Television started on an experimental basis in India in 1in9. <br />

                <br />
                <p className="text-xl my-11">It has gained increasing popularity as an effective medium for conveying news and information besides entertainment. Music systems, VCD, DVDs are also very important means of entertainment. Television as Entertainment</p>

Among all the other headsets television plays an important role Television has revolutionized life all over the world. There is a television field of entertainment.</p>
            </div>
            
           </div>
        </div>
    );
};

export default Home;