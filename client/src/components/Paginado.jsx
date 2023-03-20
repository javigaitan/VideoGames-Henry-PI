import React from "react";

export default function Paginado ({videogamesPerPage, allVideogames, paginado}){
    const pagNumber =  [];

    for (let i =0; i<Math.ceil(allVideogames/videogamesPerPage); i++){
        pagNumber.push(i)
    }

    return(
        <nav className="">
            <ul className="btn">
                {pagNumber && pagNumber.map(number =>{
    
                    <li className="btn" key={number}>
                    <a onClick={() => paginado(number)} >{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )


}

