import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class Spaceship extends Component{
  render(){
    return(
      <div>
      <h1>Spaceship Name:{this.props.name}</h1>
      <h2>Speed:{this.props.speed}  Rockets:{this.props.hasRockets}</h2>
      <small>{this.props.colors.join(",")}</small>
      </div>
    );
  }
}


Spaceship.defaultProps={
  hasRockets:false,
  colors:['black','red']
  
};



const color=["red","yellow","magenta"];
ReactDOM.render(<Spaceship
name="Enterprise"
Speed={100}
hasRockets={true}
colors={color}
  />,
document.getElementById('main'));