import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";


export default function Detail(){
    const dispatch = useDispatch()
const {id} = useParams();

    useEffect(()=>{
        dispatch(getDetail(id)) // de esta forma accedo al ID de ese detalle
    }, [dispatch])

const myVideogame = useSelector((state)=> state.detail)

return(
    
        <div>
            {
            myVideogame.length > 0 ? 
            <div>
            <h1>Soy {myVideogame.name}</h1>
                <img src={myVideogame.background_image} alt={myVideogame.name} width='500px' height='500px' />
                <h2>Generos:</h2>
                {myVideogame.genres?.map((e)=>(
                    <p key={e}>{e}</p>
                ))}
               <h2>Descripción:</h2>            
                 <div  dangerouslySetInnerHTML={{__html: myVideogame.description}}></div>
                 <h2>Fecha de lanzamiento:</h2>
        <p>{myVideogame.released}</p>
        <h2>Rating:</h2>
        <p>{myVideogame.rating}</p>
                    <h2>Plataformas:</h2>
                    {myVideogame.platforms?.map((e)=>(
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
