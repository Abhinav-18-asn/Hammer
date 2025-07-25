import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import products from "./products"
import Nav from "../components/Nav" 
import CursorFollower from "./CursorFollower"
import Footer from "./Footer"
const ProductPage = () => {
  const { category, modelId } = useParams()
  const navigate = useNavigate()

  const product = products.find(
    (p) => p.id === modelId && p.category === category
  )

  if (!product)
    return (
      <div className="text-white text-center mt-20 text-xl">
        Product not found
      </div>
    )

  return (
    
    <div className="min-h-screen overflow-y-scroll text-white px-4 py-10 flex flex-col items-center gap-10">
       <Nav />
       <CursorFollower/>
   
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 text-sm text-gray-700 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-neutral-900/80 p-6 rounded-2xl shadow-lg backdrop-blur-md hover:scale-[1.01] transition-transform duration-300"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain mb-6 rounded-xl"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-center">{product.name}</h1>
        <p className="text-base sm:text-lg text-gray-400 mt-4 text-center leading-relaxed">
          {product.description}
        </p>
      </motion.div>

      {/* Interactive*/}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className=" w-full max-w-md sm:max-w-lg lg:max-w-xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-2xl shadow-md border border-white/10"
      >
        <h2 className="text-2xl font-semibold mb-3 text-center">
          Why Choose {product.name}?
        </h2>
        <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm sm:text-base">
  {product.whyBuy.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>

      </motion.div>
      <div className="w-full mt-16">
       <Footer/>
      </div>
    </div>
  )
}

export default ProductPage
