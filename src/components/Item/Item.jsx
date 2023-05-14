import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const Item = ({ item }) => (
	<Card
		style={{ width: "18rem", height: "23rem" }}
		key={item.id}
		className="float-start cards">
		<Card.Img variant="top" src={item.img} className="card_img_top" />
		<Card.Body>
			<Card.Title>{item.name}</Card.Title>
			<Card.Text>Precio: ${item.prize}</Card.Text>
			<Link to={`/item/${item.id}`}>
				<Button variant="primary">Ver detalle</Button>
			</Link>
		</Card.Body>
		<div className="clearfix"></div>
	</Card>
)

