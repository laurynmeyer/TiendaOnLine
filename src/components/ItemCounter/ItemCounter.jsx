import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export const ItemCounter = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter > 0) onAdd(stock - counter)
    }, [counter, onAdd, stock])

    const handlerDecreaseCount = () => {
        if (counter > 0) setCounter(counter - 1)
    }

    const handlerIncreaseCount = () => {
        if (stock > counter) setCounter(counter + 1)
    }


    return (
        <div>
            <Button variant="primary" size="sm" className="button">
                <span onClick={handlerDecreaseCount}>-</span>
                {counter}
                <span onClick={handlerIncreaseCount}>+</span>         
            </Button>
            Stock disponible: {stock}
        </div>
    )
}
