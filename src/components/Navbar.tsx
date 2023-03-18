import {responsibility, contact, logo, location,  credit,insurance,price,cart} from "../assets";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Link } from "react-router-dom"

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <>
    
    <div className="navbar ">
      <img src={location} alt='' className="location-img"/>
      <Link style={{textDecoration:"none" ,color:"whitesmoke", cursor:"pointer"}}  to="/"><img src={logo} alt='' className="logo"/></Link>
        <div>
          <button
            onClick={openCart}
            className='cart'
            style={{ width: "2rem", height: "3rem", position: "relative"}}
           
          >
            
            <img src={cart} alt='' className="cart-img"/>
            <div
              className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
              style={{
                color: "black",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </button>
        </div>
     
     </div>

     <div className="sub-nav">
      
      <ul className="home-store">
        <li className="home"><Link style={{textDecoration:"none" ,color:"whitesmoke", cursor:"pointer"}}  to="/">Home</Link></li>
        <li className="store"><Link  style={{textDecoration:"none" ,color:"whitesmoke", cursor:"pointer"}} to="/store">Store</Link></li>
      </ul>
      <div className="responsibility">
<img src={responsibility} alt="" className="resp-img"/>
<p className="resp"><Link  style={{textDecoration:"none" ,color:"whitesmoke", cursor:"pointer"}} to="/responsibility">Responsibility</Link></p>
</div>

<div className="contact">
<Link  style={{textDecoration:"none" ,color:"whitesmoke", cursor:"pointer"}} to="/contact"><img src={contact} alt="" className="contact-img"/></Link>
<p className="in-touch"><Link  style={{textDecoration:"none" ,color:"whitesmoke", cursor:"pointer"}} to="/contact">Contact</Link></p>
</div>

     </div>

     <div className="features-nav">
     <img src={credit} alt="" className="credit"/>
     <img src={insurance} alt="" className="insurance"/>
     <img src={price} alt="" className="price"/>
     </div>
     </>
  )
  }