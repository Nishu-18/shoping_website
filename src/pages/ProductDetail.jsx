import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div className='center'>
      <div className='pro-img'>
        <img width={500} height={500} src={product.image} alt="" />

      </div>
      <div className='text'>
      <h2 className='title'>{product.title}</h2>
      <p className='desc'>{product.description}</p>
      <p className='price'>${product.price}</p>

      <div className='btnDiv'>
      <button  className="cartbtn" onClick={() => addToCart(product)}>Add to Cart</button>

      </div>
      

      </div>
      
      
    </div>
  )
}

export default ProductDetail
