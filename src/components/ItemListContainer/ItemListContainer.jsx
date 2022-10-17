import React, {useState, useEffect} from "react"
import "./itemlistcontainer.css"
import ItemList from "./ItemList/ItemList.jsx"
import { getComics, getComicsByCategory } from "../../Comic_Api/comicApi"
import { useParams } from "react-router-dom"

import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

function ItemListContainer() {  

  const [comicsList, SetComicsList] = useState([])
  const params = useParams()
  const categoryID = params.categoryID

  useEffect(()=> {
    if (categoryID === undefined) {
      getComics().then((data) => {
        SetComicsList(data)
      })
    } else{
      getComicsByCategory(categoryID).then((data) => {
        SetComicsList(data)
      })
    }
  }, [categoryID])

  return (
    <div id="itemListContainer">
      <h2>Marvel</h2>
      <ItemList comicsList={comicsList} />
    </div>
  )
  
}

export default ItemListContainer