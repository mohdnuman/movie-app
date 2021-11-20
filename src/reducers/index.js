import { combineReducers } from 'redux';
import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE, SET_SHOW_FAVOURITE} from '../actions';

const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}

export function movies (state=initialMovieState,action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                        ...state,
                        list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filteredArray=state.favourites.filter(movie=>movie.original_title!==action.movie.original_title);
            return {
                ...state,
                favourites:filteredArray
            }    
        case SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites:action.val
            }
        default:
            return state;    

    }

}

const initialSearchState={
    result:{}
}

export function search (state=initialSearchState,action){
    return state;
}

const initialRootState={
    movies:initialMovieState,
    search:initialSearchState
}

// export default function rootReducer (state=initialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    movies:movies,
    search:search
})






