import {useState} from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

function Item(props){

    return (
        <Link to={`/comic/${props.id}`} className="link">
            <div id='itemListComics'>
                <div id='itemListComicsIndividual' >
                    <img src={props.portada} alt="portada del comic" id='portadaComic'/> 
                    <h4 id='title'>{props.title}</h4>
                    <h4 id='price'> ${props.precio}</h4>
                </div>
            </div>
        </Link>
    )
  
}

export default Item