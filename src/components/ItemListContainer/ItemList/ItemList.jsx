import "./itemList.css"
import Item from "./Item"

function ItemList(props) {

    return (
      <div id='itemList'>
        {props.comicsList.map((comic) => {
          return (
            <Item
              key={comic.id}
              id={comic.id}
              title={comic.title}
              portada={comic.portada}
              precio={comic.precio}
              stock={comic.stock}
              descripcion={comic.descripcion}
            />
          )
        })}
      </div>
    )
}

export default ItemList

