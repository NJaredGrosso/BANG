import "./navbar.css"
import React, {useContext}  from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

function CartWidget() {

  const { getItemCount } = useContext(cartContext)

  return (
    <Link to="/cart" className="acarrito">
      <span className="carrito"><img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="icono carrito" /></span>
      <span>{getItemCount() > 0 && getItemCount()}</span>
    </Link>
    
  )
}

export default CartWidget