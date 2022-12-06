import {Component} from 'react'
import ProductItem from '../ProductItem'
import './index.css'

class ProductList extends Component {
  state = {productList: []}

  componentDidMount() {
    this.getProductData()
  }

  getProductData = async () => {
    const apiUrl = 'https://dummyjson.com/products?limit=100'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.products.map(eachProduct => ({
      id: eachProduct.id,
      title: eachProduct.title,
      description: eachProduct.description,
      thumbnail: eachProduct.thumbnail,
      price: eachProduct.price,
      rating: eachProduct.rating,
      discountPercentage: eachProduct.discountPercentage,
    }))
    this.setState({productList: updatedData})
  }

  renderProductList = () => {
    const {productList} = this.state
    return (
      <ul className="product-container">
        {productList.map(each => (
          <ProductItem productDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Products</h1>
        <div>{this.renderProductList()}</div>
      </div>
    )
  }
}

export default ProductList
