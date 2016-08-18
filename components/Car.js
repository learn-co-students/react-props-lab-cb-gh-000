import React from 'react';

class Car extends React.Component {
  constructor() {
    super();
  }

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

Car.propTypes = {
  name: React.PropTypes.string,
  horsepower: React.PropTypes.number,
  hasRockets: React.PropTypes.bool,
  colors: React.PropTypes.arrayOf(React.PropTypes.string),
};

Car.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Car;
