import React from 'react';

export default class Spaceship extends React.Component {
  static defaultProps = {
      speed: 'slow',
      hasRockets: false,
      colors: ['black', 'red']
  };
  render() {
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(',')}</p>
        <p>{this.props.speed}</p>
      </div>
    );
  }
}
