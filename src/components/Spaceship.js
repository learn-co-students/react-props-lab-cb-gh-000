// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component{

  render(){
    return (
      <div>
        <h1>Name: <strong>{this.props.name}</strong></h1>
        <h4>Speed: {this.props.speed}</h4>
        <h4>Rocket: {this.props.hasRockets ? "Yes" : "No"}</h4>
        <h4>Colors: {this.props.colors.join(', ')}</h4>

      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
}
