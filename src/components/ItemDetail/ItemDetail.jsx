import { useState } from "react";
import { Button } from "react-bootstrap";
import { ItemCounter } from "../ItemCounter/ItemCounter";

export const ItemDetail = ({ product }) => {
    const [counter, setCounter] = useState(0);

    const handleAddToCart = () => {
        if (counter > 0) {
            // Aquí puedes realizar la lógica para agregar el producto al carrito
            setCounter(0);
        }
    };

    return (
        <div className="productDetail">
            <h1>{product.name}</h1>
            <img src={product.imageid} alt={product.name} />
            <div className="description">
                <h5>Descripción del producto:</h5>
                <p>{product.description}</p>
                <h4>Precio: ${product.price}</h4>
                <ItemCounter stock={product.stock} onAdd={setCounter} />
                <Button
                    variant="primary"
                    onClick={handleAddToCart}
                    disabled={counter === 0}
                >
                    Agregar al carrito
                </Button>
                <p>Stock disponible: {product.stock}</p>
            </div>
        </div>
    );
};



