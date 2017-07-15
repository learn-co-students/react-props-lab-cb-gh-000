// Code The Spaceship Component Here
// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hacRockets: false,
  colors: ['black', 'red']
};
