import React from 'react';
// eslint-disable-next-line
import ReactDom from 'react-dom';

class Spaceship extends React.Component {
    render() {
      return (
        <div>
          <h1>name: {this.props.name}</h1>
          <h1>speed: {this.props.speed}</h1>
          <h1>hasRockets: {this.props.hasRockets}</h1>
          <h1>colors: {this.props.colors}</h1>
        </div>
      );
    }
}

Spaceship.defaultProps = {
  name: '',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
