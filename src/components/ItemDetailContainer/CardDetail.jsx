import React, {useState, useContext} from "react";
import ItemCount from "./ItemCount";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

import "./cardDetail.css"

function CardDetail({comic}) {
    const [cuenta, setCuenta] = useState(0)
    const { addToCart, removeItem} = useContext(cartContext)

    function handleAddToCart(cuenta) {
        addToCart(comic, cuenta)
        setCuenta(cuenta)
    }



    return (
        <div id="cardDetail">
            <div id="itemDetailPortada"><img id="itemDetailPortadaImg" src={comic.portada} alt="Portada del comic" /></div>
                <div id="infoItem">
                    <h1>{comic.title}</h1>
                    <h3>{comic.precio}</h3>
                    {cuenta === 0 ? (
                        <ItemCount 
                            stock={comic.stock}
                            onAddToCart={handleAddToCart}/>
                    ) : (
                        <Link to="/cart">Mostrar Carrito</Link>
                    )}
                    <button onClick={() => removeItem(comic.id)}>Eliminar del carrito</button>
                    
                    <p>{comic.descripcion}</p>
                </div>
        </div>
    )
}

export default CardDetail