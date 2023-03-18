import {twitter,linkedin,instagram,facebook} from "../assets";

export  function Footer()   {
  return (
    <div className="footer">
        <h6 className="follow">FOLLOW US</h6>
        <div className="socials">
        <img src={twitter} alt='' className="social"/>
        <img src={facebook} alt=''className="social"/>
        <img src={instagram} alt=''className="social"/>
        <img src={linkedin} alt='' className="linked"/> 
        </div>
    </div>
  )
}
