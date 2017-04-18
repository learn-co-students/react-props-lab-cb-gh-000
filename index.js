import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon"  speed={500} 
   hasRockets= {false} colors = {['black', 'red']} />,
  document.getElementById('main')
);

//require('./test/index-test.js'); // Leave this in!
