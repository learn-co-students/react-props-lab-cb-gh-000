import React from 'react';

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <p>'Welcome aboard the ' {this.props.name}'!'</p>
        <p>'We are traveling at ' {this.props.speed}'.'</p>
        <p>'Enjoy the fresh paintjob of ' {this.props.colors}'.'</p>
        <p>{this.props.hasRockets}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;