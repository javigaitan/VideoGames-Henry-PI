import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres } from "../actions";
import { Link } from "react-router-dom";
import Footer from './Footer'


export default function CreateForm() {
    const dispatch = useDispatch();
    const myGenres = useSelector((state) => state.genres);

    const allPlatforms = [
        "PC", "PlayStation","Xbox", "Nintendo Switch", "iOS","Android","PS Vita","PSP","Wii","GameCube","Game Boy","SNES","NES",
    "Commodore","Atari","Genesis"," SEGA","Dreamcast","3DO", "Jaguar","Game Gear","Neo Geo",];

    useEffect(() =>{
        dispatch(getGenres());
    }, [dispatch]);

    const [objeto, setObjeto] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        background_image: "",
        genres: [],
        platforms: [], 
    });

    const handlePlatforms = (e) => {
        if (e.target.checked) {
          setObjeto({
            ...objeto,
            platforms: [...objeto.platforms, e.target.value],
          });
        }
        if (!e.target.checked) {
          setObjeto({
            ...objeto,
            platforms: objeto.platforms.filter((el) => e.target.value !== el),
          });
        }
      };
    
      const handleGenres = (e) => {
        if (e.target.checked) {
          setObjeto({
            ...objeto,
            genres: [...objeto.genres, e.target.value],
          });
        }
        if (!e.target.checked) {
          setObjeto({
            ...objeto,
            genres: objeto.genres.filter((el) => e.target.value !== el),
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!objeto.name) return alert("El nombre es obligatorio");
        if (!objeto.description)
          return alert("El campo descripcion es obligatorio");
        if (!objeto.released)
          return alert("El campo fecha de lanzamiento es obligatorio");
        if (!objeto.background_image)
          return alert("La imagen es un campo obligatorio");
        if (!objeto.genres.length)
          return alert("Debes seleccionar al menos una categoria");
        if (!objeto.platforms.length)
          return alert("Debes seleccionar al menos una plataforma");
        if (!objeto.rating || objeto.rating < 0 || objeto.rating > 5)
          return alert(
            "El campo rating es obligatorio y debe ser mayor a 0 y menor a 5"
          );
    
        dispatch(postGame(objeto));
        alert("Videojuego Agregado Exitosamente!");
      };
    

      return (
        <>

        <div  className="top-bar" >

        <Link to= '/home'>
           <button className="install-button">Back</button>
           </Link>

        </div>
          <h1 className="title">Create your Game!</h1>


          
    
          <form  className="form" onSubmit={handleSubmit}>
            <div className="titleform">
              <label> Name: </label>
              <input
                type="text" placeholder='Ingresa el nombre aqui'
                onChange={(e) => setObjeto({ ...objeto, name: e.target.value })}
              />
            </div>
            <div className="titleform">
              <label>Description: </label>
              <input
                type="text" placeholder='Ingresa una breve descripcion'
                onChange={(e) =>
                  setObjeto({ ...objeto, description: e.target.value })
                }
              />
            </div>
            <div className="titleform">
              <label>Image: </label>
              <input
                type="text" placeholder='Ingresa el link de la imagen'
                onChange={(e) =>
                  setObjeto({ ...objeto, background_image: e.target.value })
                }
              />
            </div>
            <div className="titleform">
              <label>Release: </label>
              <input
                type="date"
                onChange={(e) => setObjeto({ ...objeto, released: e.target.value })}
              />
            </div>
            <div className="titleform">
              <label>Rating: </label>
              <input
                type="range" min="0" max="5" 
                onChange={(e) => setObjeto({ ...objeto, rating: e.target.value })}
              />
            </div>



        <div className="containercolums">
           <div className="column">
            <div className="container">
              <label className="titleform">Genres: </label>

              <div className="platforms">

              
              {myGenres?.map((e) => (
                <label key={e}>
                  <input
                    type="checkbox"
                    name={e}
                    value={e}
                    onChange={handleGenres}
                  />
                  {e}
                </label>
              ))}
              </div>
              </div>
            </div>

            <div className="column">
            <div className="container">
              <label className="titleform">Platforms:</label>

              <div className="platforms">
              {allPlatforms.map((e) => (
                <label key={e}>
                  <input
                    type="checkbox"
                    name={e}
                    value={e}
                    onChange={handlePlatforms}
                  />
                  {e}
                </label>
              ))}
              </div>
              </div>
            </div>
            

            </div>

            <div >
              <button className="install-button" type="submit">Create Game</button>
            </div>
          </form>


          <div className="footer-pos">
                <Footer/>
            </div>

          
        </>

        
      );


}


