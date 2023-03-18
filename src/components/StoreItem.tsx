import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <div className="container">
    <Card className="shadow-lg  mb-2 bg-white rounded border-0" >
      
      <div className="store-img">
       <img src={imgUrl} alt='' className="item-img"/>
       <div></div>
       </div>

    
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex flex-column align-items-baseline mb-4">
          <span className="item-name">{name}</span>
          <span className="item-price">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button className="add-btn" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center w-100"
                style={{ gap: ".5rem" }}
              >
                <button className="minus-btn" onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span className="in-cart">{quantity}</span> in cart
                </div>
                <button className="plus-btn" onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
               className='remove-btn'
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}