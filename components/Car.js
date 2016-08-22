import React from 'react';

class Car extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Horsepower: {this.props.horsepower}</p>
        <p>Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Car.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Car;
