// Code The Spaceship Component Here
import React from 'react';
 class Spaceship extends React.Component {
render(){
  return(
  <p>
  {this.props.name},
  {this.props.speed},
  {this.props.hasRockets},
  {this.props.colors},

  </p>)
}



 };
Spaceship.defaultProps ={
    name:'',
    speed :'slow',
    hasRockets :false,
    colors:['black','red']
};
export default Spaceship;
