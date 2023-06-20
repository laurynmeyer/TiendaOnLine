import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../CartWidget/assets/Carousel1.jpg';
import Carousel2 from '../CartWidget/assets/Carousel2.jpg';
import Carousel3 from '../CartWidget/assets/Carousel3.jpg';

export function ImagenPrincipal() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
          style={{ maxHeight: '600px', maxWidth: '100%' }}
        />
        <Carousel.Caption>
          <h3>CONOCE NUESTROS PRODUCTOS</h3>
          <p>Aqui podrás encontrar todas las marcas que buscás</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt="Second slide"
          style={{ maxHeight: '600px', maxWidth: '100%' }}
        />
        <Carousel.Caption>
          <h3>AGREGÁ TU PRODUCTO AL CARRITO</h3>
          <p>Visualizá el detalle de tu compra</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel3}
          alt="Third slide"
          style={{ maxHeight: '600px', maxWidth: '100%' }}
        />
        <Carousel.Caption>
          <h3>CARGÁ TUS DATOS</h3>
          <p>Y Recibí el producto en la comodidad de tu hogar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

