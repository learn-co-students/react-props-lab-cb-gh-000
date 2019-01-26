// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1>Speed: {this.props.speed}</h1>
                <h1>Has Rockets: {this.props.hasRockets}</h1>
                <h1>Colors: {this.props.colors}</h1>
            </div>
        );
    }
}


Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

Spaceship.propTypes = {
    name: PropTypes.string,
    speed: PropTypes.number,
    hasRockets: PropTypes.bool,
    colors: PropTypes.arrayOf(PropTypes.string)
}