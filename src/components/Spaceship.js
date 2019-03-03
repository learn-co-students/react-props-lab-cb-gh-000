// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {

  render() {
    const hasRockets = this.props.hasRockets;
    return (
      <div className="spaceship-card">
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {hasRockets ? 'Yes' : 'No'}</p>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red'],
};

export default Spaceship;
