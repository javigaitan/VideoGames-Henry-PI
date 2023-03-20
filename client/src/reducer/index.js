
const InitialState = {
    videogames : [],
    allVideogames: []
}

function rootReducer (state= InitialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,
            };

            default:
                 return state;
    }
};


export default rootReducer;