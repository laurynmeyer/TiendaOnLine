import React from "react"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <header>
            <nav>
                <h3>Mi Tienda On Line</h3>
                <ul>
                    <li>
                        <a href="">Contacto</a>
                        <a href="">Nuestras promociones</a>
                        <a href="">Nosotros</a>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </nav>
            <CartWidget contador={0} />
        </header>
    );
};

export default NavBar

