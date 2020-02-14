import React from 'react';
import ReactDOM from 'react-dom';
import { Convo } from './chat/convo.jsx';
// import { conversation } from './chat/convo.js';
import './style.css';
import './index.html';


export class App extends React.Component{
  render() {
    return <Convo/>
  }
};




ReactDOM.render(<App />, document.querySelector('#app'));
