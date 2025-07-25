
import products from "./products"
import ProductCard from "../components/ProductCard"
import Navbar from "./Nav"
import CursorFollower from "./CursorFollower"
const Earphones = () => {
  const earphoneProducts = products.filter(
    (product) => product.category === "earphones"
  )

  return (
    <div className="min-h-screen px-8 py-16 md:min-h-screen">
        <div className="mb-12 -mt-12">    
        <Navbar />
        <CursorFollower/>
        </div>
      <h1 className="text-4xl font-bold mb-12">Explore Earphones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {earphoneProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            price={product.price}
            modelId={product.id} 
          />
        ))}
      </div>
     
    </div>
  )
}

export default Earphones
