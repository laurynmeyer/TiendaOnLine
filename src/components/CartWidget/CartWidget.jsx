import React from "react"
import cart from './assets/carritoDeCompras.png'

const CartWidget = ({ contador }) => {
    return (
        <div>
            <img src={cart} alt="carrito de compras" />
            <span>{contador}</span>
        </div>
    )
}

export default CartWidget