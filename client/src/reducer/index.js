const InitialState = {
    videogames : [],
    allVideogames: [],
    genres: [],
    detail: []
}

function rootReducer (state= InitialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,
            };


        case 'GET_GENRES':
                return{
                    ...state,
                    genres: action.payload,
                };


        case 'POST_GAME':
          return {
            ...state,
          }


        case 'FILTER_BY_GENRES':
            const allVideogamesGenres = state.allVideogames;
            const genresFilter = 
            action.payload ==='all' 
            ? allVideogamesGenres
             : allVideogamesGenres.filter((e) =>
              e.genres.includes(action.payload)
            );
            return{
                ...state,
                videogames: genresFilter,

            };

        case "GET_NAME_VIDEOGAMES":
            
        
        return {
        ...state,
        videogames: action.payload, //siempre voy a trabajr sobre lo que estoy fitrando
      };


       case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };


       case "FILTER_CREATED":
      const videogames = state.allVideogames;
      const createdFilter =
        action.payload === "created"
          ? videogames.filter((e) => e.createdInDb)
          : videogames.filter((e) => !e.createdInDb); //que va a tener la data q yo quiero filtrar
      return {
        ...state,
        videogames:
          action.payload === "all" ? state.allVideogames : createdFilter,
      };




       case "ORDER_BY_NAME":
      let sortArr =
        action.payload === "asc"
          ? state.videogames.sort((a, b) => a.name.localeCompare(b.name))
          : state.videogames.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        videogames: sortArr,
      };


       case "ORDER_BY_RATING":
      let arrSort =
        action.payload === "asc"
          ? state.videogames.sort((a, b) => a.rating - b.rating)
          : state.videogames.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        videogames: arrSort,
      };
      default:
        return state;
    }
};


export default rootReducer;