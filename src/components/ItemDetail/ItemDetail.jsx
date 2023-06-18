import { useContext } from "react"

import { ItemCounter } from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/cartContext"

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext)

  const onAdd = quantity => addItem(product, quantity)

  return (
    <div className="productDetail">
      <h1>{product.name}</h1>
      <img
        src={product.imageid}
        height={300}
        alt={product.name}
      />
      <p>{product.description}</p>
      <p className="price">$ {product.price}</p>
      <ItemCounter className="counter" stock={product.stock} onAdd={onAdd} />
    </div>
  )
}



