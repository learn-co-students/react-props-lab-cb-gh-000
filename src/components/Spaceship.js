// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component{
  render(){
    return (
      <p>
      name is {this.props.name},speed is {this.props.speed}, it has Rockets {this.props.hasRockets}, the color is {this.props.colors}
      </p>
    );
  }
}
Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};
