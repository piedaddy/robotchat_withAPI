import React from 'react';
import ReactDOM from 'react-dom';
// import '../index.css';
import { Chat } from '../chat/chat.jsx';
// import { conversation } from './chat/convo.js';



export class Convo extends React.Component {
  

  state = {
    conversation : [],
  }

  componentDidMount() {
  fetch('http://bootcamp.podlomar.org/api/robotchat')
    .then(resp => resp.json())
    .then(json => this.setState({conversation:json}));
  }

  render() 
  {
    if (this.state.conversation.length === 0) {
      return <h1>Waiting for the data</h1>;
    }

  return (
    this.state.conversation.map(msg => {
      return (
        <Chat 
        side = {msg.side}
        name = {msg.name}
        text = {msg.text}
        />
      )
    })
  )
  }
 

};