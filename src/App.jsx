import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { MyFooter } from "./components/Footer/Footer"

import "./App.css"

function App() {
	const onAdd = stock => console.log("Stock actual:  " + stock)

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer greeting="Productos" />} />
				<Route path="/category/:id" element={<ItemListContainer greeting="Productos" />} />
				<Route path="/item/:id" element={<ItemDetailContainer onAdd={onAdd} />} />
			</Routes>
			<MyFooter />
		</BrowserRouter>
	)
}

export default App




