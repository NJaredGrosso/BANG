import {useState} from 'react'
import { Link } from 'react-router-dom'


function Item(props){

    return (
        <Link to={`/comic/${props.id}`}>
            <div id='itemListComics'>
                <div className='itemListComicsIndividual' >
                    <img src={props.portada} alt="portada del comic" /> 
                    <h4>{props.title}</h4>
                    <h4> ${props.precio}</h4>
                </div>
            </div>
        </Link>
    )
  
}

export default Item