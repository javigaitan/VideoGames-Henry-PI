import React from "react";
import { Link } from "react-router-dom";

export default function Card({id, name, background_image, genres}){
    return (

        
        <div>

   <div class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
      <img src={background_image} alt='img game not found' width='300px' height='200px'/>
      </figure>
      <div class="article-body">
        <h2>{name}</h2>
        <h3>{genres}</h3>
        <p>
          
        </p>
        <Link class="read-more" to = {'/home/' + id} >Details</Link>
        
      </div>
    </div>
  </article>

</div>
</div>
    )
}