// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
        <dl>
          <dt>speed:</dt>
          <dd>{ this.props.speed }</dd>
          <dt>Rockets:</dt>
          <dd>{ this.props.hasRockets }</dd>
          <dt>Colors:</dt>
          <dd>{ this.props.colors.join(' ') }</dd>
        </dl>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
