import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames, filterCreated, orderByName , orderByRating, filterByGenres } from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import Footer from './Footer'




export default function Home(){

    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.videogames);
    const AllGenres = useSelector ((state) => state.genres);
    const [orden, setOrden] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    

    //Estados locales para el paginado
    const [currentPage,setCurrentPage] = useState(1)
    const [gamesPerPage] = useState(15)  //Defino cuantos debe traerme por pag
    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    const currentGames = allVideoGames.slice(indexOfFirstGame, indexOfLastGame)


    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }





    useEffect (() =>{
        dispatch(getVideogames())
        dispatch(getGenres())
    },[dispatch]);


    useEffect(() => {
        dispatch(getVideogames())
          .then(() => setIsLoading(false));
        dispatch(getGenres())
      }, [dispatch]);
      




    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames())

    }


    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames())
        }
        
        function handleFilterGenres(e){
            dispatch(filterByGenres(e.target.value))
            setCurrentPage(1)
        }
        function handleFilterCreation(e){
            dispatch(filterCreated(e.target.value))
        }
        
        function handleSort(e){
            e.preventDefault();
            dispatch(orderByName(e.target.value))
            setCurrentPage(1);  //xq yo quiero setear la pagina en la primera. set orden lo voy a usar para q cuando yo seteo esta pagina me modifique el estado local y se renderice
            setOrden(`Ordenado ${e.target.value}`)  //a ese estado local modificalo para q desde el front me haga el ordenamiento, lo seteo ordenado de x forma, para que me haga la modificacion del renderizado
        }
        
        function handleSortRating(e){
            e.preventDefault()
            dispatch(orderByRating(e.target.value))
            setCurrentPage(1);
            setOrden(`Ordenado ${e.target.value}`)
        }
        
    


    return(

        <div className="homepage">
            <Link className="btn btn-back" to= '/'> Back</Link>
            
            <div className="title-home">
            <h1  > Todos los juegos en un solo sitio</h1>
            </div>

            

            <button className="btn btn-up" onClick= {e =>{handleClick(e)}}>
                Resetear todo los  juegos nuevamente
            </button>
            <Link className="btn btn-up" to= '/videogames'> Crear VideoJuego</Link>

            <div>

                {isLoading &&   <Loader/>  }
                <SearchBar/>
            </div>

            <div>

            <div className="filtros"  >
                <select onChange={e =>handleSortRating(e)} className="btn btn-filter"  >
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>

                <select onChange={e =>handleSort(e)} className="btn btn-filter" >
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>

                <select onChange={e =>handleFilterCreation(e)} className="btn btn-filter" >
                    <option value='all'>Todos</option>
                    <option value='api'>Existentes</option>
                    <option value='created'>Creados</option>
                </select>


                <select onChange={e =>handleFilterGenres(e)} className="btn btn-filter" >
                    <option value='all'>Todos los Generos</option>
                    {AllGenres?.map((e) =>(
                        <option key={e} value={e}> {e} </option>

                    ))}
                    
                </select>

                </div >

                <div className=" paginado">

                <Paginado 

                  gamesPerPage = {gamesPerPage}
                  allGames = {allVideoGames.length}
                  paginado = {paginado}
                />

                 </div> 

            <div className="cardbox">
                    {currentGames.length > 0 ? (  currentGames.map((c) => (
             <div >
             <Card
               id={c.id}
               background_image={c.background_image}
               name={c.name}
               genres={c.genres}
               key={c.id}
             />
             </div>
             ))
             ) : (
        <div className="title-error-api">
          <h2 className="">Ups! Puede que ocurrio un error con la conexion. Por favor intenta nuevamente</h2>
          
        </div>
        

        )}
        </div>
         </div>

            <div>
                <Footer/>
            </div>
            
        </div>
        
    )
}