import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./App.css";
import CartView from "./components/CartView/CartView";

function App() {
	return (
		<div className="App">
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<ItemListContainer />} />
						<Route
							exact
							path="/category/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route path="/comic/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<CartView />} />
						<Route path="*" element={<h2>Direccion no encontrada</h2>} />
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
