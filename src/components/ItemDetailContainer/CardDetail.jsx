import React, { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

import "./cardDetail.css";

function CardDetail({ comic }) {
	const { addToCart, removeItem, getItemInCart } = useContext(cartContext);
	const [cuenta, setCuenta] = useState(0);

	function handleAddToCart(cuenta) {
		addToCart(comic, cuenta);
		setCuenta(cuenta);
	}

	let item = getItemInCart(comic.id);
	let count;
	item === undefined ? (count = 0) : (count = item.count);
	useEffect(() => {
		setCuenta(count);
	}, [count]);

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
					<h1 className="title">{comic.title}</h1>
					<h3>${comic.precio} c/u</h3>
					<div className="buttons">
						{cuenta === 0 ? (
							<ItemCount stock={comic.stock} onAddToCart={handleAddToCart} />
						) : (
							<div>
								<Link to="/cart">
									<button className="actionButton">Mostrar Carrito</button>
								</Link>
								<button
									onClick={() => {
										removeItem(comic.id);
									}}
									className="actionButton"
								>
									Eliminar del carrito
								</button>
							</div>
						)}
					</div>
				</div>
				<p className="description">{comic.descripcion}</p>
			</div>
		</div>
	);
}

export default CardDetail;
