import { useState, useEffect } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { CartWidget } from "../CartWidget/CartWidget";
import { getFirestore, collection, getDocs} from "firebase/firestore";

export const NavBar = () => {
    const [itemsMenu, setItemsMenu] = useState([]);

    useEffect(() => {
        const getProductsFromFirebase = async () => {
            const db = getFirestore();
            const productsCollection = collection(db, "items");
            const querySnapshot = await getDocs(productsCollection);
            const products = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            const categories = products.map((products) => products.category);
            const uniqueCategories = [...new Set(categories)].sort();
            setItemsMenu(uniqueCategories);
        };

        getProductsFromFirebase();
    }, []);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Global Technology
                </Navbar.Brand>
                <Nav className="me-auto items_nav">
                    {itemsMenu.map((category) => (
                        <RouterNavLink
                            key={category}
                            to={`/category/${category}`}
                            activeClassName="active">
                            {category.toUpperCase()}
                        </RouterNavLink>
                    ))}
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};