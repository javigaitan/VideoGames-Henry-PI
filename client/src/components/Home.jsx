import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames, orderByName , orderByRating,FilterByGenres } from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";



export default function Home(){

    const dispatch = useDispatch();
    const allVideoGames = useSelector ((state) => state.videogames)
    const AllGenres = useSelector ((state) => state.genres)
    const [order, setOrder] = useState('')

    //Estados locales para el paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)  //Defino cuantos debe traerme por pag
    const indexOfLastVideogame = currentPage * videogamesPerPage // 14
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = allVideoGames.slice(indexOfFirstVideogame, indexOfLastVideogame)


    const paginado = (pagNumber) => {
        setCurrentPage(pagNumber)
    }






    useEffect (() =>{
        dispatch(getVideogames())
        dispatch(getGenres())
    },[dispatch])




    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames())

    }




    return(

        <div>
            <Link className="btn btn-back" to= '/'> Back</Link>
            
            <div className="title-home">
            <h1  > Todos los juegos en un solo sitio</h1>
            </div>

            

            <botton className="btn btn-up" onClick= {e =>{handleClick(e)}}>
                Resetear todo los  juegos nuevamente
            </botton>
            <Link className="btn btn-up" to= '/videogames'> Crear VideoJuego</Link>

            <div  >

            <div className="filtros"  >
                <select className="btn btn-filter"  >
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>

                <select className="btn btn-filter" >
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>

                <select className="btn btn-filter" >
                    <option value='all'>Todos</option>
                    <option value='created'>Creados</option>
                    <option value='api'>Existentes</option>
                </select>


                <select className="btn btn-filter" >
                    <option value='all'>Todos</option>
                    {AllGenres?.map((e) =>(
                        <option key={e} value={e}> {e} </option>

                    ))}
                    
                </select>

                </div>

                <Paginado

                videogamesPerPage = {videogamesPerPage}
                allVideoGames = {allVideoGames.length}
                paginado = {paginado}
                />

                <div className="cardbox">

                {currentVideogames && currentVideogames.map((c) =>{
                 
            return (
                <div >
                    
                    
                    <Card id={c.id} background_image={c.background_image} name={c.name} genres={c.genres}  key={c.id} />

                

                </div>
              );
            })} 
            </div>

            

            </div>
        </div>
        
    )
}