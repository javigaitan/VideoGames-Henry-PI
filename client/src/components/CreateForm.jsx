import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGame, getGenres } from "../actions";
import { Link } from "react-router-dom";

function validador(input){
    let errors= {}
    
    if(!input.name){
        errors.name = 'The game must have a name!';
    }if(!input.description){
        errors.description = 'The game must have a description!';
    }if(!input.released){
        errors.released = 'The game must have a release date!';
    }if(!input.rating){
        errors.rating = 'the game must have a rating!';
    }if(input.rating < 0 || input.rating > 5 || input.rating / input.rating !== 1){
        errors.rating = 'The rating must be into 0 and 5 points!';
    }if(!input.platforms){
        errors.platforms = 'The game must have a least 1 platform'
    }if(input.genres.length <= 0){
        errors.genres = 'the game must have a least 1 genre'
    }
    return errors 
    
}

export default function CreateGame(){
    const dispatch = useDispatch()
    let key = 0
    useEffect(() =>{
        dispatch(getGenres())
    }, [dispatch])

    const stategenres = useState((state) => state.allGenres)

    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({

        name:"",
        description:"",
        released:"",
        background_image:"",
        rating:"",
        platforms:"",
        genres:[]

    })

}



