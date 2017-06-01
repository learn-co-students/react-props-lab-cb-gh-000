import React from 'react';

export default class Spaceship extends React.Component {

  render() {
    return (
      <div className="spaceship-container">
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <small>Genres: {this.props.colors.join(', ')}</small>
      </div>
    );
  }

}

Spaceship.defaultProps = {
  name: 'Generic Falcon',
  speed: 999,
  hasRockets: false,
  colors: ['black', 'red']
};
