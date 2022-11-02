import React, { useContext} from 'react'
import { cartContext } from '../../context/cartContext'

function CartView() {
    const { cart, removeItem} = useContext(cartContext)
    console.log(cart)


  return (
    <div>
        {cart.map((comic) => (
            <div>
                {/*<img src={comic.portada} alt="portada del comic" />*/}
                <div>
                    <h2>{comic.title} </h2>
                    <h4>por unidad ${comic.precio} </h4>
                    <h4>{comic.count} </h4>
                    <h2>${comic.precio * comic.count} </h2>
                </div>
                    <button onClick={() => removeItem(comic.id)}> X </button>
            </div>
        ))}
    </div>
  )
}

export default CartView