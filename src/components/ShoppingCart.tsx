import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
      <Offcanvas.Header closeButton className="shop-cart" >
        <Offcanvas.Title className="cart-name">SHOPPING CART</Offcanvas.Title >
      </Offcanvas.Header>
      <Offcanvas.Body  >
        <Stack gap={4}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="total-btn">
          <button className="total">
            PAY {" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
