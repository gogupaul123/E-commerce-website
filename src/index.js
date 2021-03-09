import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './Reducer';

ReactDOM.render(
  

    <StateProvider initialState={initialState} reducer ={reducer}> 
      <App />
    </StateProvider>


  ,
  document.getElementById('root')
);

