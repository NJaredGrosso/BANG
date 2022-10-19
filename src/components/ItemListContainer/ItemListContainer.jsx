import React, {useState, useEffect, createElement} from "react"
import "./itemlistcontainer.css"
import ItemList from "./ItemList/ItemList.jsx"
import { getComics, getComicsByCategory } from "../../Comic_Api/comicApi"
import { useParams } from "react-router-dom"


function ItemListContainer() {  

  const [comicsList, setComicsList] = useState([])
  const {categoryId} = useParams()

  useEffect(()=> {
    if (categoryId === undefined) {
      getComics().then((data) => {
        setComicsList(data)
      })
    } else{
      getComicsByCategory(categoryId).then((data) => {
        setComicsList(data)
      })
    }
  }, [categoryId])

  return (
    <div id="itemListContainer">
      <ItemList comicsList={comicsList} />
    </div>
  )
  
}

export default ItemListContainer