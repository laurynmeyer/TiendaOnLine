
import { NavLink as RouterNavLink } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const Item = ({ item }) =>{
	console.log("Items:", item);
return (

	<Card
		style={{ width: "18rem", height: "23rem" }}
		key={item.id}
		className="cards">
		<Card.Img variant="top" src={item.imageid} className="card_img_top" />
		<Card.Body>
			<Card.Title className="itemName">{item.name}</Card.Title>
			<Card.Text>Precio: ${item.price}</Card.Text>
			<RouterNavLink to={`/item/${item.id}`}>
				<Button variant="primary button_class">Ver detalle</Button>
			</RouterNavLink>
		</Card.Body>
	</Card>
)
}

