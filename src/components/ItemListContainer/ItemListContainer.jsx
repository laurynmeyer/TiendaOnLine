import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const refCollection = id
      ? query(
        collection(db, "items"),
        where("category", "==", id)
      )
      : collection(db, "items")

    getDocs(refCollection).then(snapshot => {
      if (snapshot.size === 0) setList([])
      else {
        setList(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      }
    })
  }, [id])

  return (
    <Container className="list_container">
      <h1 className="title">{greeting}</h1>
      <div className="cards_container">
        {list && list.length > 0 ? (
          <ItemList list={list} />
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </Container>
  );
};

