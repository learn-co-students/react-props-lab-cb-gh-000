<<<<<<< HEAD
import React from 'react';

class Spaceship extends React.Component {

  render() {
    const hasRockets = this.props.hasRockets;
=======
class Spaceship extends React.Component {
  const hasRockets = this.props.hasRockets;
  render() {
>>>>>>> 31f1eba5024bdd70dcfc2f87bd53a397915ea29e
    return (
      <div className="spaceship-card">
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {hasRockets ? 'Yes' : 'No'}</p>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red'],
};

<<<<<<< HEAD
export default Spaceship;
=======
const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
>>>>>>> 31f1eba5024bdd70dcfc2f87bd53a397915ea29e
