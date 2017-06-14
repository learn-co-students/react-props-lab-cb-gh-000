import React from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
      <h2>With speeds reaching {this.props.speed}, and with rockets: {this.props.hasRockets}, they come available in the colors {this.props.colors.join(", ")}</h2>
      </div>
    );
  }
}

export default Spaceship;

ReactDOM.render(
  <Spaceship
    name="lol"
    speed=3
    colors=['red','blue']
    />,
  document.getElementById('root')
);
