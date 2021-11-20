import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore ,applyMiddleware} from 'redux';
import rootReducer from './reducers';

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

const thunk=({dispatch,getState})=>(next)=>(action)=>{
 if(typeof action==='function'){
   action(dispatch);
   return;
 }
 next(action);
}
const store=createStore(rootReducer,applyMiddleware(logger,thunk));

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

