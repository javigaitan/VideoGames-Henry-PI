import React from "react";
import {Link} from "react-router-dom";


export default function LandingPage(){
    return(
        <div className="landing">
            <h1 className="title"> Bienvenidos al Store </h1>
            <Link to = '/home'>
                <button className="btn">Comenza tu Busqueda </button>
            </Link>

        </div>
    )
}