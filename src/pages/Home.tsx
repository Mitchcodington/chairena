
import { Link } from "react-router-dom"
import {chair1, chair2, dec,} from "../assets"


export function Home() {
    return (
    <>
    <div className='main-hero'>

    <div className='hero'>
    <img src={chair1}alt='' className='chair1'/>
    <div className='hero-right-text'>
        <div className='black-bg'>
        <h4 className='who'>Who says you can't buy style?</h4>
        <h6 className='discount-up'>UP TO</h6>
        <h1 className='discount'>70%</h1>
        <h6 className='discount'>DISCOUNT OFF</h6>
        </div>
        <div className='comfort'>
   
        <button className='shop-btn'><Link  style={{textDecoration:"none" ,color:"whitesmoke", cursor:"pointer"}} to="/store">SHOP NOW</Link></button>
        </div>
        <div>

        </div>
    </div>
    </div>

    <div >
    <p className='inspiration'>Japandi Inspiration</p>
    <div className='new'>
        <h6 className='new-text'>NEW</h6>
    </div>
    <img src={chair2}alt='' className='chair2'/>
    <div className='chairman'>
    <h1 className='chairman-text'>EMILY</h1>
    <p className='chairman-tiny-text'>The <span style={{fontWeight:"bold"}}>EMILY</span> collection offers a cloud-like
         comfort and japandi-inspired style - perfect 
         for those who love posh comfort</p>
         <button className='chairman-shop'><Link  style={{textDecoration:"none" ,color:"#ffc017", cursor:"pointer"}} to="/store">SHOP NOW</Link></button>
         </div>
    </div>
      
    </div>
   <div className='dec'>
    <img src={dec} alt=''className='dec-img'/>
    <p className='earth'>
 We are shocked by the devastating earthquakes
  across Turkey and Syria that have led to thousands 
  of displaced families. We've donated to the DEC who are
   working with locally led relief efforts to provide emergency
    shelter, food and clean water. <a href='https://donation.dec.org.uk/turkey-syria-earthquake-appeal' style={{color:'#ffc017'}}>
         Join us in donating.</a></p>
   </div>
   
    </>
    )
}