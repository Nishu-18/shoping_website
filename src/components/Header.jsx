import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className='header'>
        <header>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <button onClick={handleLogout}>Logout</button>
    </header>

    </div>
    
  )
}

export default Header
