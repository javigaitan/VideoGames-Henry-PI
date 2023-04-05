import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions";
import PropTypes from "prop-types";


export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();

 useEffect(()=>{
 dispatch(getDetail(id)) // de esta forma accedo al ID de ese detalle
}, [dispatch, id])

const myVideogame = useSelector((state)=> state.detail)

return(
    
        <div>

                   <div  className="top-bar" >

                    <Link to= '/home'>
                        <button className="install-button">Back</button>
                    </Link>

                     </div>


            { myVideogame && Object.keys(myVideogame).length > 0 ?(

        <div>

 <div className="detail-container">
 <div className="image-container">
    <img src={myVideogame.background_image} alt={myVideogame.name} width='500px' height='350px' />
  </div>
 <div className="data-container">
    <h1 className="title-detail"> {myVideogame.name}</h1>

    <h2 className="title-detail">Descripción:</h2>            
    <div className="description-detail" dangerouslySetInnerHTML={{__html: myVideogame.description}}></div>


</div>


</div>
<div className="detail-contain">

    <div className="detail">
    <h2 className="title-detail">Fecha de lanzamiento:</h2>
    <p>{myVideogame.released}</p>
    </div>
    <div className="detail">
    <h2 className="title-detail">Generos:</h2>
    {myVideogame.genres?.map((e)=>(
        <p key={e.id}>{e}</p>
    ))}
    </div>
    <div className="detail">
    <h2 className="title-detail">Rating:</h2>
    <p>{myVideogame.rating}</p>
    </div>
    <div className="detail">
    <h2 className="title-detail">Plataformas:</h2>
    {myVideogame.platforms?.map((e)=>(
        <p key={e.id}>{e}</p>
    ))}
    </div>
    </div> 
    </div>): (

                    <p className='lds-dual-ring loader' >Cargando...</p>

                    )}
                    
        </div>
);
}
Detail.propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    myVideogame: PropTypes.object.isRequired,
};