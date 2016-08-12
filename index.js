const React = require('react');

class Car extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Horsepower: {this.props.horsepower}</p>
        <p>Has rockets: {this.props.hasRockets.toString()}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Car.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false,
};

module.exports = Car;
