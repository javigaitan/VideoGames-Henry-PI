import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../actions";


export default function SearchBar(){
    const dispatch = useDispatch ()
    const [name, setName] = useState('')

    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameVideogames(name))
    }



    return (
        <div className='searchdiv'>
            <input className='btn' type='text' placeholder='Search' onChange={e => handleChange(e)} /><button className='btn' type='submit' onClick={e => handleSubmit(e)} >Search</button>
        </div>
    )


   
    
}