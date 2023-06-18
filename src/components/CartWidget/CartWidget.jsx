import Badge from "react-bootstrap/Badge"
import cart from "./assets/carrito.png"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import Button from "react-bootstrap/Button"

const styles = {
  img: {
    height: 30,
  },
  span: {
    paddingLeft: 10,
  },
}

export const CartWidget = () => {
  const { productosAgregados } = useContext(CartContext)

  const totalQuantity = () =>
    productosAgregados.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity,
      0
    )

  return (
    !!totalQuantity() && (
      <Link to="/cart">
        <Badge bg="info">
          <img src={cart} alt="Changuito" style={styles.img} />
          <span style={styles.span}>{totalQuantity()}</span>
        </Badge>
        <Button>Finalizar compra</Button>
      </Link>
    )
  )
}