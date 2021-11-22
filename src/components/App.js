import Navbar from './Navbar';
import { data } from '../data';
import Moviecard from './Moviecard';
import React from 'react';
import { addMovies ,setShowFavourites} from '../actions';
// import { StoreContext } from '..';
// import {connect} from '../index';
import {connect} from 'react-redux';

class App extends React.Component{
  componentDidMount(){
    // this.props.store.subscribe(()=>{
    //   console.log("UPDATED");
    //   this.forceUpdate();
    // });
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite=(movie)=>{
    const {movies}=this.props;
    const {favourites}=movies;

    const index=favourites.indexOf(movie);

    if(index!== -1){
      return true;
    }
    return false;

  }
  onChangeTab=(val)=>{
      this.props.dispatch(setShowFavourites(val));
  }
  render(){
    const {movies,search}=this.props;
    const {list, favourites, showFavourites }=movies;

    const displayMovies=showFavourites?favourites:list;
    
      return (
        <div className="App">
          <Navbar  dispatch={this.props.dispatch} search={search}/>
          <div className="main">
            <div className="tabs">
                <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
                <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
            </div>
            <div className="list">
                {displayMovies.map((movie,index)=>(
                  <Moviecard movie={movie} 
                  key={`movies-${index}`}
                  dispatch={this.props.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                  />
                ))}
            </div>
            {displayMovies.length===0?<div className="no-movies">No Movies To Display!</div>:null}
          </div>
        </div>
      );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store)=><App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state){
  return {
    movies:state.movies,
    search:state.search
  }
};

const connectedAppComponent=connect(callback)(App);

export default connectedAppComponent;
