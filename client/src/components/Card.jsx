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
        <a href="#" class="read-more">
          Details 
          
        </a>
      </div>
    </div>
  </article>



  {/*      </section> <Link to={'/home/'+id}>
       <h3>{name}</h3>
            
    <img src={background_image}   alt='img no encontrada' width='300px' height='200px'/>
       </Link> 
               <h5>{genres}</h5>  

               </div> */}

</div>
</div>
    )
}