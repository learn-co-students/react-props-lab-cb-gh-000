// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? 'affirmative' : 'negative'}</p>
        <p>Spaceship colors:</p>
        <ul>
          {this.props.colors.map((color) =>
            <li>{color}</li>
          )}
        </ul>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
