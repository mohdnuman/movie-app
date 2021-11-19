import Navbar from './Navbar';
import { data } from '../data';
import Moviecard from './Moviecard';
import React from 'react';

class App extends React.Component{
  componentDidMount(){
    this.props.store.subscribe(()=>{
      console.log("UPDATED");
      this.forceUpdate();
    });
    this.props.store.dispatch({
        type:"ADD_MOVIES",
        movies:data
    });
  }
  render(){
    const movies=this.props.store.getState();
      return (
        <div className="App">
          <Navbar />
          <div className="main">
            <div className="tabs">
                <div className="tab">Movies</div>
                <div className="tab">Favourites</div>
            </div>
            <div className="list">
                {movies.map((movie,index)=>(
                  <Moviecard movie={movie} key={`movies-${index}`}/>
                ))}
            </div>

          </div>
        </div>
      );
  }
}

export default App;
