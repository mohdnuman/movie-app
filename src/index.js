import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore ,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from'redux-thunk';

// const logger=function({dispatch,getState}){
//   return function(next){
//       return function(action){
//         console.log("ACTION_TYPE=",action.type);
//         next(action);
//       }
//   }
// }

const logger=({dispatch,getState})=>(next)=>(action)=>{
      console.log("ACTION_TYPE=",action.type);
      next(action);
}

// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//  if(typeof action==='function'){
//    action(dispatch);
//    return;
//  }
//  next(action);
// }
const store=createStore(rootReducer,applyMiddleware(logger,thunk));

export const StoreContext=createContext();

class Provider extends React.Component{
  render(){
    const {store}=this.props;
    return( <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

