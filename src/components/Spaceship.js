import React from 'react';

class Spaceship extends React.Component{
  //let rockets = "No";
  //if(this.props.hasRockets === true){
  //  rockets = "Yes";
  //}
  render(){
    return (
        <div>
          <h1>{this.props.name}</h1>
          <p>Speed: {this.props.speed}</p>
          <p>Rockets: {this.hasRockets}</p>
          <p>Colors : {this.props.colors}</p>
        </div>
    );
  }
}

Spaceship.defaultProps ={
  speed: 'slow',
  hasRockets: false,
  colors: `['black','red']`
};

export default Spaceship;
