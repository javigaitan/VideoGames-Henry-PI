import React from "react";

export default function Paginado ({videogamesPerPage, allVideogames, paginado}){
    const pagNumber =  [];

    for (let i =0; i<Math.ceil(allVideogames/videogamesPerPage); i++){
        pagNumber.push(i)
    }

    return(
        <nav>
            <ul>
                {pagNumber &&
                pagNumber.map(number =>{
    
                    <li>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )


}

