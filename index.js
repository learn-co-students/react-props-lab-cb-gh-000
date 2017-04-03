import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
