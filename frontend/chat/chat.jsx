import React from 'react';
import ReactDOM from 'react-dom';
import './chat.css';
import unicorn_image from './img/unicorn.png';
import cleverbot_image from './img/cleverbot.png';


export class Chat extends React.Component{
  state = {
    likes : 0,
  }

  addLike = () => {
    this.setState({ 
      likes : this.state.likes +=1
    })
  }

  render () {
    let name_img = unicorn_image;  
    if (this.props.name === "Cleverbot"){
      name_img = cleverbot_image
    }

    return (
          <> 
            <div className={`message message--${this.props.side}`}>
              <img className="message__head" src={name_img}/>
              <div className="message__text">{this.props.text}<button className = "button" onClick = {this.addLike}>Like</button>
              <p class = "number">{this.state.likes}</p>
                </div>
            </div>
          </>
        )
    }
}

