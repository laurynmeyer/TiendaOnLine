import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);

            const db = getFirestore();
            const itemDocRef = doc(db, "items", id);

            try {
                const docSnap = await getDoc(itemDocRef);
                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <Container>
            {loading ? (
                <p>Cargando producto...</p>
            ) : (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: {product.price}</p>
                    {product.imageid && (
                        <img src={product.imageid} alt="Imagen del producto" />
                    )}
                </div>
            )}
        </Container>
    );
};