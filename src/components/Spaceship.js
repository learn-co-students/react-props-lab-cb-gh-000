// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="movie-card">

        <h2>{this.props.name}</h2>
        <h2>{this.props.speed}</h2>
        {/*  <small>Genres: {this.props.colors.join(', ')}</small> */}
        <small>Genres: {this.props.colors.join(', ')}</small>

      </div>
    );
  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
