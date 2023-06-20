import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/cartContext"

import { getFirestore, collection, getDocs } from "firebase/firestore"

import { NavBar } from "./components/NavBar/NavBar"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { MyFooter } from "./components/Footer/Footer"
import { Cart } from "./components/cart/cart"
import { ImagenPrincipal } from "./components/Carousel/Carousel"
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const db = getFirestore()

    const refCollection = collection(db, "items")


    getDocs(refCollection).then(snapshot => {
      if (snapshot.size === 1) console.log("no results")
      else
        console.log(
          snapshot.docs.map(doc => {
            return { id: doc.id, data: doc.data() }
          })
        )
    })

  }, [])


  const onAdd = stock => console.log("Stock actual:  " + stock)

  return (
    <CartProvider>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><ImagenPrincipal /><ItemListContainer greeting="Nuestros Productos" /></div>} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Nuestros Productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer onAdd={onAdd} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

