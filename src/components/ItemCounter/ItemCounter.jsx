import { useState } from "react"
import { Link } from "react-router-dom"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ItemCounter = ({ stock, onAdd, initial }) => {
  const [counter, setCounter] = useState(initial ?? 0)

  const handleIncreaseCount = () => {
    if (stock > counter) setCounter(counter + 1)
  }

  const handleDecreaseCount = () => {
    if (counter > 0) setCounter(counter - 1)
  }

  const handleAddToCart = () => {
    if (counter > 0) {
      toast.success('Producto agregado al carrito', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      onAdd(counter);
    }
  }

  return (
    <section className="col-12 col-sm-6 col-md-3 mb-4">
      {stock > 0 ? (
        <>
          <InputGroup>
            <Button
              variant="primary"
              className="counter button_class"
              onClick={handleDecreaseCount}
            >
              -
            </Button>
            <Form.Control
              value={counter}
              className="text-center counter"
            />
            <Button
              variant="primary"
              className="counter button_class"
              onClick={handleIncreaseCount}
            >
              +
            </Button>
          </InputGroup>
          {!!counter && (
            <Button
              variant="outline-primary"
              className="mt-4 counter button_class"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </Button>
          )}
          <div className="mt-4 counter">
            Stock disponible: {stock - counter}
          </div>
        </>
      ) : (
        <>
          <div className="mt-4">No hay stock</div>
          <Link to="/">
            <Button variant="outline-primary" className="mt-4">
              Seguir comprando
            </Button>
          </Link>
        </>
      )}
    </section>
  )
}