import {useState} from 'react'
import "./itemCount.css"

function ItemCount(props) {

    const [cantidad, setCantidad] = useState(1)

    function add() {
        if (cantidad < props.stock) {
            console.log("suma 1")
            setCantidad(cantidad + 1);
        }else{
            console.log("No hay suficiente stock")
        }
    }

    function subtract(){
        if (cantidad > 1){
            console.log("Resta 1")
            setCantidad(cantidad - 1)            
        }else{
            console.log("no se puede restar mas")
        }
    }

    return(
        <div id='contador'>
            <button onClick={subtract} className="contadorButtons" >-</button>
            <h4>{cantidad}</h4>
            <button onClick={ add } className="contadorButtons" >+</button>
        </div>
    )
}

export default ItemCount