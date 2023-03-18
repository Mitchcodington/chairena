import { Routes, Route, BrowserRouter } from "react-router-dom"

import { Home } from "./pages/Home"
import { Store } from "./pages/Store"

import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import {Footer} from "./components/Footer"
import Responsibility from "./pages/Responsibility"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
    <ShoppingCartProvider>
       <Navbar /> 
      
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/responsibility" element={<Responsibility />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
    </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App