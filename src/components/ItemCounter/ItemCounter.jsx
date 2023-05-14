import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export const ItemCounter = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter > 0) onAdd(stock - counter)
    }, [counter, onAdd, stock])

    const handlerIncreaseCount = () => {
        if (stock > counter) setCounter(counter + 1)
    }

    const handlerDecreaseCount = () => {
        if (counter > 0) setCounter(counter - 1)
    }

    return (
        <div>
            <Button variant="primary" size="sm" className="button">
            <span onClick={handlerIncreaseCount}>+</span>
            {counter}
            <span onClick={handlerDecreaseCount}>-</span>
            </Button>
        </div>
    )
}
