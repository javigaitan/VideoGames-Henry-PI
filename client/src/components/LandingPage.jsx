import React from "react";
import {Link} from "react-router-dom";


export default function LandingPage(){
    return(
        <div>
            <h1> Bienvenidos </h1>
            <Link to = '/home'>
                <button>Comenza la Busqueda AQUI</button>
            </Link>

        </div>
    )
}