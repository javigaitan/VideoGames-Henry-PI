import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames } from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";



export default function Home(){

    const dispatch = useDispatch();
    const allVideoGames = useSelector ((state) => state.videogames)
    const AllGenres = useSelector ((state) => state.genres)

    //Estados locales para el paginado
    const [currentPage, setCurentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)  //Defino cuantos debe traerme por pag
    const indexOfLastVideogames = currentPage * videogamesPerPage // 14
    const indexOfFirstVideogames = indexOfLastVideogames - videogamesPerPage
    const currentVideogames = allVideoGames.slice(indexOfFirstVideogames, indexOfLastVideogames)


    const paginado = (pagNumber) => {
        setCurentPage(pagNumber)
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
            <Link to= '/'> Back</Link>
            <Link to= '/videogames'> Crear VideoJuego</Link>
            <h1> El mejor sitio para buscar tu juego</h1>

            

            <botton onClick= {e =>{handleClick(e)}}>
                Resetear todo los  juegos nuevamente
            </botton>

            <div>
                <select >
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>

                <select >
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>

                <select >
                    <option value='all'>Todos</option>
                    <option value='created'>Creados</option>
                    <option value='api'>Existentes</option>
                </select>


                <select >
                    <option value='all'>Todos</option>
                    {AllGenres?.map((e) =>(
                        <option key={e} value={e}> {e} </option>

                    ))}
                    
                </select>

                {allVideoGames &&
               allVideoGames.map((el) => {
            return (
              <Card name={el.name} image={el.img} genres={el.genres} />
              );
            })} 

            </div>
        </div>
        
    )
}