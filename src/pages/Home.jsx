import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Get categories on mount
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    if (selectedCategory !== "all") {
      url = `https://fakestoreapi.com/products/category/${encodeURIComponent(selectedCategory)}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [selectedCategory]);

  

  return (
    <div>
      <div className='cat'>
        <button className=' hello allbtn '
          onClick={() => setSelectedCategory("all")}
          style={{ 
            border: "none", 
            background: "none", 
            color: selectedCategory === "all" ? "blue" : "#333",
            fontWeight: selectedCategory === "all" ? "bold" : "normal",
            cursor: "pointer"
          }}
        >
          All
        </button>
        {categories.map(cat => (
          <button className='catbtn'
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{ 
              border: "none", 
              background: "none", 
              color: selectedCategory === cat ? "blue" : "#333",
              fontWeight: selectedCategory === cat ? "bold" : "normal",
              cursor: "pointer"
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>

    </div>
    
  )
}

export default Home
