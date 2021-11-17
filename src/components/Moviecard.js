import React from "react";


class Moviecard extends React.Component {
    render(){
        const {movie}=this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.poster_path}/>
                </div>
                <div className="right">
                    <div className="title">{movie.original_title}</div>
                    <div className="plot">{movie.overview}</div>
                    <div className="footer">
                        <div className="rating">{movie.voter_average}</div>
                        <button className="favourite-btn">Favourite</button>
                    </div>

                </div>
 
            </div>
        );
    }
  }
  
  export default Moviecard;