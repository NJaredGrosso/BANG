import {createContext, useState} from 'react'

const cartContext = createContext()

function CartContextProvider(props){
    const [cart, setCart] = useState([])

    function addToCart(item, count) {
        let newCart = [...cart]
        let newItem = { ...item, count}
        newCart.push(newItem)
        setCart(newCart)
    }

    function clearCart(){
        let cartClean = [ ]
        setCart(cartClean)
    }

    function removeItem(idToRemove){
        let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove)
        setCart(newCart)
    }

    function getItemCount() {
        let total = 0
        cart.forEach((itemInCart) => {
            total = total + itemInCart.count
        })
        return total
    }

    function getPriceTotal() {
        let total = 0
        cart.forEach((itemInCart) => {
            total = total + itemInCart.count * itemInCart.price
        })
        return total
    }
    
    return (
      <>
          <cartContext.Provider
            value={{cart, addToCart, clearCart, removeItem , getItemCount, getPriceTotal}}
          >
              {props.children}
          </cartContext.Provider>
      </>
    )
}




export {cartContext, CartContextProvider}