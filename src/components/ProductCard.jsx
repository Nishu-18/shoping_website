import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
      <img className='card-img' src={product.image} alt={product.title} />
      
      </Link>
      
      <h4 className='cardTitle'>{product.title}</h4>
      <p className='cardPrize'>${product.price}</p>
      
    </div>
  )
}

export default ProductCard
