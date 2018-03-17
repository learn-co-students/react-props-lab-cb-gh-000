import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Speed: {this.props.speed}</li>
          <li>Has Rockets: {this.props.hasRockets ? 'Yes' : 'No'}</li>
          <li>Colours:
            <ul>
              {this.props.colors.map(color => {
                return <li>{color}</li>;
              })}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
