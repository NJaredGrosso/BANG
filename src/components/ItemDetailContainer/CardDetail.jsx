import React, {useState} from "react";
import ItemCount from "./ItemCount";
import "./cardDetail.css"

function CardDetail({comic}) {
    const [cuenta, setCuenta] = useState(0)

    function handleAddToCart(cuenta) {
        setCuenta(cuenta)
        console.log("Se agrego al carrito", comic, cuenta)
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
                        <a href="/cart">Mostrar Carrito</a>
                    )}
                    
                    
                    <p>{comic.descripcion}</p>
                </div>
        </div>
    )
}

export default CardDetail