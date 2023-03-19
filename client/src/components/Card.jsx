import React from "react";

export default function Card({name, image, genres}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{genres}</h5>
            <img src={image} alt='img no encontrada' width='200px' height='250px'/>
        </div>
    )
}