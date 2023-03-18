
import {call,email,care} from "../assets"

const Contact = () => {
  return (
    <div>
        <div className="help">
        <div className="query">
            <h1 className="query-head">We're here to help</h1>
            <p className="query-text">Whatever your query, we're always on hand to help out. 
                Choose from online support or call to talk to a
                 Chairena today. In order to make sure you get through
                  to the right team, first time, please carefully read the 
                  options below.</p>
        </div>
        <div>
        <div className="place-order">
                <h1 className="order-head">Place an order</h1>
                <p className="order-text">If you would like to place 
                    an order over the phone with 
                    one of our Chairenians, please
                     call free on:</p>
                     <h2 className="order-head">0800 140 00 00</h2>
                     <p className="order-text2">The direct sales team are available on this number from 9am - 9pm today.
                   Please note this team are unable to assist with after sales support
                    (for example product support or technical issues), 
                    please see the Customer Service email and phone numbers below.</p>
            </div>
            <img src={call} alt=''className="call"/>
            
        </div>
        </div>
      
        <div className="customer">
        <h1 className="support-head">CUSTOMER SUPPORT</h1>
            <div className="email-main">
            <img src={email} alt=''className="email"/>
            <h1 className="customer-head">Email Us</h1>
            <p className="customer-text">To email our Customer Support team, all you need to do is send an email to 
                <strong> Support@chairena.com</strong>.
            You can also upload images and videos to help us resolve your query faster.</p>
            </div>

            <div className="care-main">
            <img src={care} alt=''className="care"/>
            <h1 className="customer-head">Call us</h1>
            <p className="customer-text">If you can't find the answer to your query in our online support portal,
                 you might prefer to talk to one of our Chairena's over the phone.
              Our customer support team are on hand to help with any enquiries, including queries about delivery.
            Speak to a Chairena today by calling<br/><strong>03444 80 00 00</strong>.</p>
            <h6>General Enquiries & Product Support</h6>
            <p>9am-5pm Monday - Sunday</p>

            <h6>Delivery Arranging</h6>
            <p>9am-5pm Monday - Sunday</p>
            </div>
        </div>
    </div>
  )
}
export default Contact