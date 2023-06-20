import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import { CartContext } from "../../context/cartContext"
import Swal from 'sweetalert2';

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const { productosAgregados, deleteItem, clear } =
    useContext(CartContext)

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: productosAgregados,
      total: total(),
    }

    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then(response => {
      if (response.id) {
        clear()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu compra ha sido realizada con éxito',
          showConfirmButton: false,
          timer: 1500
      })
      }
    })
  }

  const handleChange = ev => {
    setFormValues(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }))
  }

  const total = () =>
    productosAgregados.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    )

  return (
    <Container className="mt-4 form_compra">
      <h4 className="title_compra">Detalle de productos</h4>
      {!productosAgregados.length ? (
        <mark>No hay productos en el carrito</mark>
      ) : (
        <>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productosAgregados.map(producto => (
                <tr key={producto.id}>
                  <td>{producto.name}</td>

                  <td>$ {producto.price}</td>
                  <td>{producto.quantity}</td>
                  <td>
                    <Button
                      className="eliminar"
                      onClick={() =>
                        deleteItem(producto.id)
                      }
                    >Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>$ {total()}</td>
              </tr>
            </tfoot>
          </Table>
          <h4 className="title_compra">Ingresar datos de usuario</h4>
          <Form className="formulario_datos">
            <Form.Group
              className="mb-3 datos_formulario"
              controlId="formBasicEmail"
            >
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.name}
                type="text"
                name="name"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 datos_formulario"
              controlId="formBasicEmail"
            >
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.email}
                type="email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3 datos_formulario">
              <Form.Label>Teléfono de contacto</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.phone}
                type="text"
                name="phone"
              />
            </Form.Group>
            <Button
              className="datos_formulario"
              variant="primary"
              type="button"
              onClick={sendOrder}
            >
              Finalizar compra
            </Button>
          </Form>
        </>
      )}
    </Container>
  )
}