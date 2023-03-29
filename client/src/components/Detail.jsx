import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getVideogames } from "../actions";
import { useEffect } from "react";


export default function Detail(){
    const dispatch = useDispatch()
const {id} = useParams();

    useEffect(()=>{
        dispatch(getDetail(id)) // de esta forma accedo al ID de ese detalle
    }, [dispatch])

const getVideogames = useSelector((state)=> state.detail)

return(
    
        <div>
            {
            getVideogames.length > 0 ? 
            <div>
            <h1>Soy {getVideogames.name}</h1>
                <img src={getVideogames.background_image} alt={getVideogames.name} width='500px' height='500px' />
                <h2>Generos:</h2>
                {getVideogames.genres?.map((e)=>(
                    <p key={e}>{e}</p>
                ))}
               <h2>Descripción:</h2>            
                 <div  dangerouslySetInnerHTML={{__html: getVideogames.description}}></div>
                 <h2>Fecha de lanzamiento:</h2>
        <p>{getVideogames.released}</p>
        <h2>Rating:</h2>
        <p>{getVideogames.rating}</p>
                    <h2>Plataformas:</h2>
                    {getVideogames.platforms?.map((e)=>(
                        <p key={e}>{e}</p>
                    ))}
                    </div> : 
                    <p>Cargando...</p>
                    }
                    <Link to= '/home'>
                        <button className="btn btn-back" >Back</button>
                    </Link>
        </div>
)}
