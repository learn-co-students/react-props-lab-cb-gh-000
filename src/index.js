import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: 'false',
  colors: ['black','red']
};

const spaceshipColors = ['green','yellow'];

ReactDOM.render(
  <Spaceship name="Millennium Falcon"
             speed='40'
             hasRockets='true'
             colors={spaceshipColors}/>,
  document.getElementById('root')
);
