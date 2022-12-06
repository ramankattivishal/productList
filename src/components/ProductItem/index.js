import './index.css'

const ProductItem = props => {
  const {productDetails} = props
  const {
    title,
    description,
    thumbnail,
    price,
    rating,
    discountPercentage,
  } = productDetails
  return (
    <li className="list-items">
      <img className="image" src={thumbnail} alt="thumbnail" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price-container">
        <p className="price">Price: {price}$</p>
        <p className="discount">Discount: {discountPercentage}%</p>
      </div>
      <p>Rating: {rating}</p>
      <button type="button" className="button">
        Buy Now
      </button>
    </li>
  )
}

export default ProductItem
