// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';


export default class Spaceship extends React.Component {
  render(){
    name = "RicFlairWoo"
    return(
  <div>
      name={this.props.name}
      speed={this.props.speed}
      hasRockets={this.props.hasRockets}
      colors={this.props.colors}
  </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
}
