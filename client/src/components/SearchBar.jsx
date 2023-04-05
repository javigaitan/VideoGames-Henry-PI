import React from "react";
import { useState, useEffect } from "react";
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
        <form className="ps-search-form">
      <input type="text" placeholder="enter game" className="btn btn-filter" onChange={handleChange} value={name} />
      <button type="submit" className="btn btn-filter" onClick={handleSubmit}> Search <i className="fa fa-search"></i>
      </button>
     </form>
    )


   
    
}