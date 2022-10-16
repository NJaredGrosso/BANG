import React from "react";
import ItemCount from "./ItemCount";

function CardDetail({comic}) {
    return (
        <>
            <div id="itemDetailPortada"><img id="itemDetailPortadaImg" src={comic.portada} alt="Portada del comic" /></div>
                <div id="infoItem">
                    <h1>{comic.title}</h1>
                    <h3>{comic.precio}</h3>
                    <ItemCount stock={comic.stock}/>
                    <button id="infoItemButton">Añadir al carrito</button>
                    <p>{comic.descripcion}</p>
                </div>
        </>
    )
}

export default CardDetail