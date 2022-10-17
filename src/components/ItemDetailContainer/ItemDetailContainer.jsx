import React, { useState, useEffect} from "react"

import { getUnComic } from "../../Comic_Api/comicApi.js"
import "./itemDetailContainer.css"

import CardDetail from "./CardDetail"

import { useParams } from "react-router-dom"

function ItemDetailContainer() {

    const [comic, setComic] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getUnComic(id).then((data) => {
            setComic(data);
        })
    }, [id])

    return(
        <div id="itemDetail">
            <CardDetail comic={comic}/>
        </div>
    )
}

export default ItemDetailContainer