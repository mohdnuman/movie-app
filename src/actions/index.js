// {
//     type:"ADD_MOVIES",
//     movies=[m1,m2,m3]
// }

//action types
export const ADD_MOVIES='ADD_MOVIES';

//action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies:movies
    }

}

export const ADD_FAVOURITE='ADD_FAVOURITE';

export function addFavourite(movie){
    return {
        type: ADD_FAVOURITE,
        movie:movie
    }

}

export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';

export function removeFavourite(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie:movie
    }

}

export const SET_SHOW_FAVOURITE='SET_SHOW_FAVOURITE';

export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITE,
        val:val
    }

}

