import React from 'react';
import ReactDOM from 'react-dom';


export default class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.name}</p><br/>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets} </p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
