import React from "react";

export default function Paginado({gamesPerPage, allGames, paginado}) {
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allGames/gamesPerPage); i++){
        pageNumbers.push(i + 1)
    }


    let liId = 0

    return(
        <div className="paginado">
            {
            pageNumbers?.map(e => {
                liId++
                return(
                    <button className='btn paginadobox' key={liId} onClick={() => paginado(e)}>{e}</button>
                )
            })
            }
        </div>
    )


}

