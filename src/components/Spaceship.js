// Code The Spaceship Component Here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends Component {
  static defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
  }
    
  render() {
    return (
      <div>
        { this.props.name }
        { this.props.speed }
        { this.props.hasRockets }
        { this.props.colors }
      </div>
    )
  }
}
