import './product-card.css'

function ProductCard(props) {
    const {description, title, price, images} = props.productData
    return (
        <div className="card">
            <img src={images[0]} alt="Denim Jeans" style={{width:"100%"}}/>
            <h1>{title}</h1>
            <p className="price">${price}</p>
            <p>{description}</p>
            <p><button>Add to Cart</button></p>
        </div>
    )
}

export default ProductCard