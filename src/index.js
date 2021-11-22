import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore ,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from'redux-thunk';
import { Provider } from 'react-redux';

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

// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return( <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//     );
//   }
// }

// export function connect(callback){
//   return function(Component){
//     class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const {store}=this.props;
//         const state=store.getState();
//         const dataToBePassedAsProps=callback(state);
//         return(
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch}/>
//         );
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return (
//           <StoreContext.Consumer>
//             {(store)=><ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

