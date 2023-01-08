import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

import "./cardDetail.css";

function CardDetail({ comic }) {
	const [cuenta, setCuenta] = useState(0);
	const { addToCart, removeItem } = useContext(cartContext);

	function handleAddToCart(cuenta) {
		addToCart(comic, cuenta);
		setCuenta(cuenta);
	}

	return (
		<div id="cardDetail">
			<div id="itemDetailPortada">
				<img
					id="itemDetailPortadaImg"
					src={comic.portada}
					alt="Portada del comic"
				/>
			</div>
			<div className="infoItem">
				<div id="mainInfoItem">
					<h1>{comic.title}</h1>
					<h3>${comic.precio} c/u</h3>
					<div className="buttons">
						{cuenta === 0 ? (
							<ItemCount stock={comic.stock} onAddToCart={handleAddToCart} />
						) : (
							<Link to="/cart">
								<button className="actionButton">Mostrar Carrito</button>
							</Link>
						)}
						<button
							onClick={() => {
								removeItem(comic.id);
							}}
							className="actionButton"
						>
							Eliminar del carrito
						</button>
					</div>
				</div>
				<p className="description">{comic.descripcion}</p>
			</div>
		</div>
	);
}

export default CardDetail;
