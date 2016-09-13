const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship;
