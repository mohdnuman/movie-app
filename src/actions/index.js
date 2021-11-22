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

export function handleMovieSearch(movie){
    const url=`https://api.themoviedb.org/3/search/movie?api_key=52db3c1544ef4ed388278b8da2ce2109&language=en-US&query=${movie}&page=1&include_adult=false`;
    // console.log(movie);
    // console.log(url);
    return function(dispatch){
        fetch(url)
            .then(response=>response.json())
            .then(movie=>{
                // console.log(movie.results[0]);

                dispatch(addMovieSearchResult(movie.results[0]));
            })
        }
}

export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';


export function addMovieSearchResult(movie){
    // console.log(movie);
    return {
        type:ADD_SEARCH_RESULT,
        movie:movie
    }
}


export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';

export function addMovieToList(movie){
    return {
        type:ADD_MOVIE_TO_LIST,
        movie:movie
    }
}

