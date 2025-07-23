import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Career from './components/Career.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Sales from './components/Sales.jsx'
import Terms from './components/Terms.jsx'
import Privacy from './components/Privacy.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<Error/>
  },
  {
    path:'/about',
    element:<About />,
  },
  {
    path:'/careers',
    element:<Career/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
      path:'/saleService',
      element:<Sales/>
  },
  {
    path:'/termService',
    element:<Terms/>
  },
  {
    path:'/privacy',
    element:<Privacy/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
