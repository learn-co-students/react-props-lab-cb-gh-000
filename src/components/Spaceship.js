import React from 'react';

export default class SpaceShip extends React.Component {
  render () {
    return (
      <div className="space-ship">
        <h2>Name: {this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets ? 'True' : 'False'}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}
SpaceShip.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
