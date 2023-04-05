import React from "react";
import {Link} from "react-router-dom";



export default function LandingPage(){
    return(
        <div className="landing">
            <h1 className="title-landing"> Welcome to the Store </h1>
            <Link to = '/home'>
                <button className="ps-button"> Start </button>
            </Link>

           

        </div>
    )
}