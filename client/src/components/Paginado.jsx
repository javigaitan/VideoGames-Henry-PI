import React from "react";

export default function Paginado({gamesPerPage, allGames, paginado}) {
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allGames/gamesPerPage); i++){
        pageNumbers.push(i + 1)
    }

    let liId = 0

    return(
        <div className="">
            {
            pageNumbers?.map(e => {
                liId++
                return(
                    <button className='btn' key={liId} onClick={() => paginado(e)}>{e}</button>
                )
            })
            }
        </div>
    )


}

