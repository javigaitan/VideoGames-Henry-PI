import React from "react";
import { Link } from "react-router-dom";

export default function Card({id, name, background_image, genres}){
    return (
        <div>

            <Link to={'/home/'+id}>
            <h3>{name}</h3>
            
            <img src={background_image} alt='img no encontrada' width='200px' height='250px'/>
            </Link>
            <h5>{genres}</h5>

        </div>
    )
}