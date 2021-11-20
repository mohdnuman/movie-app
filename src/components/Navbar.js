import React from "react";
import {handleMovieSearch,addMovieToList} from'../actions';


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }

    handleSearch=()=>{
        const {searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }

    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));

    }
    render(){
        const {result,showSearchResults}=this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearchResults &&
                    <div className="search-results">
                    <div className="search-result">
                    <img src={'https://image.tmdb.org/t/p/original'+result.poster_path} alt="search-pic" />
                    <div className="movie-info">
                    <span>{result.original_title}</span>
                    <button onClick={() => this.handleAddToMovies (result)}>
                    Add to Movies
                    </button>
                    </div>
                </div>
                </div>
            }
            </div>
            </div>
        );
    }
  }
  
  export default Navbar;