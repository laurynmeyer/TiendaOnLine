import { ItemCounter } from "../ItemCounter/ItemCounter"


export const ItemDetail = ({ product, onAdd }) => {
    return (
        <div className="productDetail">
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name} />
            <div className="description">
                <h5>Descripción del producto:</h5>
                <p>{product.description}</p>
                <h4>Precio: ${product.price}</h4>
                <ItemCounter stock={product.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}


