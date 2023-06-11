import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
    const [list, setList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            const db = getFirestore();
            const refCollection = collection(db, "items");

            try {
                const snapshot = await getDocs(refCollection);
                const products = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }));

                if (id) {
                    const productsFiltered = products.filter(
                        (item) => item.data.category === id
                    );
                    setList(productsFiltered);
                } else {
                    setList(products);
                }
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [id]);

    return (
        <Container className="list_container">
            <h1 className="title">{greeting}</h1>
            <div className="cards_container">
                <ItemList list={list} />
            </div>
        </Container>
    );
};

export default ItemListContainer;