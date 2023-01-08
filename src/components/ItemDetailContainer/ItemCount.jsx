import { useState } from "react";
import "./itemCount.css";

function ItemCount({ stock, onAddToCart }) {
	const [cantidad, setCantidad] = useState(1);

	function add() {
		if (cantidad < stock) {
			console.log("suma 1");
			setCantidad(cantidad + 1);
		} else {
			console.log("No hay suficiente stock");
		}
	}

	function subtract() {
		if (cantidad > 1) {
			console.log("Resta 1");
			setCantidad(cantidad - 1);
		} else {
			console.log("no se puede restar mas");
		}
	}

	return (
		<>
			<div id="contador">
				<button onClick={subtract} className="contadorButtons">
					-
				</button>
				<h4>{cantidad}</h4>
				<button onClick={add} className="contadorButtons">
					+
				</button>
			</div>
			<button
				id="infoItemButton"
				className="actionButton"
				onClick={() => {
					onAddToCart(cantidad);
				}}
			>
				Añadir al carrito
			</button>
		</>
	);
}

export default ItemCount;
