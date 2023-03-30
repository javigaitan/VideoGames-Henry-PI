import axios from 'axios';

export function getVideogames(){
    return async function(dispatch){
        try{
        const json = await axios.get ('http://localhost:3001/videogames');
        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: json.data

        });
    } catch (error){
        console.log(error);
    }
} ;

}


export function getNameVideogames(payload) {
  return async function (dispatch) {
   
      const json = await axios.get(
        "http://localhost:3001/videogames?name=" + payload
      );
      // console.log(json.data);
      return dispatch({
        type: "GET_NAME_VIDEOGAMES",

        payload: json.data, //es lo que devuleve la ruta una vez q le asigno un name
      });
    
  };
}

export function getGenres() {
    return async function (dispatch) {
      try {
        const json = await axios.get("http://localhost:3001/genres");
        return dispatch({
          type: "GET_GENRES",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  

    export function getDetail(id) {
      return async function (dispatch) {
        try {
          var json = await axios.get("http://localhost:3001/videogames/" + id);
          return dispatch({
            type: "GET_DETAIL",
            payload: json.data
          });
        } catch (error) {
          console.log(error);
        }
    };
  }


  



// Post


  export function postGame(payload) {
    return async function (dispatch) {
      
        let response = await axios.post("http://localhost:3001/videogame", payload);
        return response
      
      }
    };



  //Filtros


  export function filterByGenres(payload) {
    return {
      type: "FILTER_BY_GENRES",
      payload,
    };
  }


  export function filterByCreated(payload) {
    //el payload es el value de la opcion que vos elijas
    return {
      type: "FILTER_BY_CREATED",
      payload,
    };
  }


  export function orderByName(payload) {
    return {
      type: "ORDER_BY_NAME",
      payload,
    };
  }


  export function orderByRating(payload) {
    return {
      type: "ORDER_BY_RATING",
      payload,
    };
  }