import Badge from "react-bootstrap/Badge"

import cart from "./assets/carrito.png"

const styles = {
    img: {
		height: 30,
	},
	span: {
		paddingLeft: 10,
	},
}

export const CartWidget = () => {
	return (
		<Badge bg="info">
			<img src={cart} alt="Carrito" style={styles.img} />
			<span style={styles.span}>0</span>
		</Badge>
	)
}