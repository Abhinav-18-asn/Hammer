import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Career from './components/Career.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sales from './components/Sales.jsx'
import Terms from './components/Terms.jsx'
import Privacy from './components/Privacy.jsx'
import Products from './components/Products.jsx'
import Headphones from './components/Headphones.jsx'
import Earphones from './components/Earphones.jsx'
import Speakers from './components/Speakers.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProductPage from './components/ProductPage.jsx' // ✅ ADD THIS LINE
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/careers',
    element: <Career />
  },
  {
    path: '/saleService',
    element: <Sales />
  },
  {
    path: '/termService',
    element: <Terms />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/headphones',
    element: <Headphones />
  },
  {
    path: '/speakers',
    element: <Speakers />
  },
  {
    path: '/earphones',
    element: <Earphones />
  },
  {
    path: '/products/:category/:modelId',
    element: <ProductPage /> // ✅ Make sure ProductPage is correctly imported
  },
  {
    path:'/login',
    element:<Login/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
