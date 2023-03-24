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

  export function postGame(payload) {
    return async function (dispatch) {
      try {
        const json = await axios.post("http://localhost:3001/videogame", payload);
        return dispatch({
          type: "POST_GAME",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  
  export function getDetail(payload) {
    return async function (dispatch) {
      try {
        const json = await axios.get(
          "http://localhost:3001/videogame/" + payload
        );
        return dispatch({
          type: "GET_DETAIL",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function getNameVideogames(payload) {
    return async function (dispatch) {
      try {
        const json = await axios.get(
          "http://localhost:3001/videogames?name=" + payload
        );
        // console.log(json.data);
        return dispatch({
          type: "GET_NAME_VIDEOGAMES",
  
          payload: json.data, //es lo que devuleve la ruta una vez q le asigno un name
        });
      } catch (error) {
        alert("No se encontraron juegos con ese nombre");
        //le mando el error xq puede fallar la ruta y eso
        console.log(error);
      }
    };
  }
  export function filterByGenres(payload) {
    return {
      type: "FILTER_BY_GENRES",
      payload,
    };
  }
  export function filterCreated(payload) {
    //el payload es el value de la opcion que vos elijas
    return {
      type: "FILTER_CREATED",
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