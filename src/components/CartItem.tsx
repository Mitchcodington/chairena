import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center mt-5 ml-0">
      <img
        src={item.imgUrl}
        style={{ width: "120px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto fs-7" style={{fontWeight:'bold'}}>
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".70rem",fontWeight:'bold' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".70rem"}}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div style={{ fontSize: ".90rem",fontWeight:'bold',color:'gray'}}> {formatCurrency(item.price * quantity)}</div>
      <Button
        type="button" className="btn btn-warning"
        variant="danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}