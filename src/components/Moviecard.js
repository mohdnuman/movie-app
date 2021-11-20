import React from "react";
import {addFavourite,removeFavourite} from '../actions';


class Moviecard extends React.Component {
    favouriteCLickHandler=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie));
    }
    unfavouriteCLickHandler=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFavourite(movie));
    }
    render(){
        const {movie,isFavourite}=this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={'https://image.tmdb.org/t/p/original'+movie.poster_path}/>
                </div>
                <div className="right">
                    <div className="title">{movie.original_title}</div>
                    <div className="plot">{movie.overview}</div>
                    <div className="footer">
                        <div className="rating">{movie.vote_average}</div>
                        {
                            isFavourite
                            ?<button className="unfavourite-btn" onClick={this.unfavouriteCLickHandler}>Unfavourite</button>:
                        <   button className="favourite-btn" onClick={this.favouriteCLickHandler}>Favourite</button>

                        
                        }
                    </div>

                </div>
 
            </div>
        );
    }
  }
  
  export default Moviecard;