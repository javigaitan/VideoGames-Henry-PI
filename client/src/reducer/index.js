
const InitialState = {
    videogames : []
}

function rootReducer (state= InitialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return{
                ...state,
                videogames: action.payload
            }
    }
};


export default rootReducer;