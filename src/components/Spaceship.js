import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>Ship Name: {this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>Color: {this.props.colors}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
