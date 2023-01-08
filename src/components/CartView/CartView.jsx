import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./cartView.css";

function CartView() {
	const { cart, removeItem } = useContext(cartContext);
	console.log(cart);
	let totalPrice = 0;
	cart.map((comic) => {
		totalPrice = totalPrice + comic.precio * comic.count;
	});

	return (
		<div className="cartView">
			{cart.map((comic) => (
				<div className="cartItem">
					<div className="cartImgContainer">
						<img
							src={comic.portada}
							className="cartItemImg"
							alt="portada del comic"
						/>
					</div>
					<div className="cartInfo">
						<h2 className="cartTitleItem">{comic.title} </h2>
						<h4 className="cartPriceUItem">${comic.precio} c/u</h4>
						<h4 className="cartCantidadItem">Unidades: {comic.count} </h4>
						<h2 className="cartPriceTItem">${comic.precio * comic.count} </h2>
					</div>
					<button
						className="deleteButtonItem"
						onClick={() => removeItem(comic.id)}
					>
						X
					</button>
				</div>
			))}
			<div className="totalBar">
				<h1>TOTAL: ${totalPrice}</h1>
				<button className="buyButton">Comprar</button>
			</div>
		</div>
	);
}

export default CartView;
