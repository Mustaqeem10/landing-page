import React, {useState} from 'react';

const Banner = React.lazy(() => import ('../../components/banner/banner'));
const Cards = React.lazy(() => import ('../../components/boxes/cards'));
const Navbar = React.lazy(() => import ('../../components/navbar/navbar'));
const About = React.lazy(() => import ('../../components/about/about'));
const Produce = React.lazy(() => import ('../../components/produce/produce'));
const Purchase = React.lazy(() => import ('../../components/purchase/purchase'));
const Footer = React.lazy(() => import ('../../components/footer/footer'));
const ProductCard = React.lazy(() => import ('../../components/product-card/product-card'))

function LandingPage() {

    const [productData, setProductData] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProductData(data.products)
            console.log("Products:", productData)
        }
        catch(error) {
            console.error(error)
        }
    }
  
    return (
        <>
        <Navbar />
        <button onClick={getData}>Fetch Data</button>
        {productData.map((product) => {
            return (
                <ProductCard key={product.id} productData={product}/>
            )
        })}
        <Banner />
        <Cards />
        <About />
        <Produce />
        <Purchase />
        <Footer />
        </>
    )
}


export default LandingPage