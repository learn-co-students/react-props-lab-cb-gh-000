import React, { Component } from 'react';

class Spaceship extends Component {
  render() {
    return (
      <div className="Spaceship">
        <h1>Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h2>hasRockets: {this.props.hasRockets}</h2>
        <p>Colors: {this.props.colors}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
