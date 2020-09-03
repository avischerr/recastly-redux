import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!


// Setting up Thunk middleware and creating store
//import thunkMiddleware from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducers'

export default createStore(
  rootReducer, {currentVideo: exampleVideoData[0], videoList: exampleVideoData},
  applyMiddleware(thunk)
);


// need some kind of export statement here