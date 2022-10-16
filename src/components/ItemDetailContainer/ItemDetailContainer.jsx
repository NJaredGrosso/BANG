import React, { useState, useEffect} from "react"

import { getUnComic } from "../../Comic_Api/comicApi"
import "./itemDetailContainer.css"
import { useParams } from "react-router-dom"
import CardDetail from "./CardDetail"

function ItemDetailContainer(props) {

    const [comic, setComic] = useState([])
    const {itemID} = useParams()


    useEffect(() => {
        getUnComic(itemID).then((data) => {
            setComic(data);
        })
    }, [itemID])

    return(
        <div id="itemDetail">
            <CardDetail comic={comic} />
        </div>
    )
}

export default ItemDetailContainer