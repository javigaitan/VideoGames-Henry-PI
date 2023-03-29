import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres } from "../actions";
import { Link } from "react-router-dom";


export default function CreateForm() {
    const dispatch = useDispatch();
    const myGenres = useSelector((state) => state.genres);

    const AllPlataforms = [
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


}


