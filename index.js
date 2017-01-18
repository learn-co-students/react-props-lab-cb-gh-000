const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

ReactDOM.render(
  <Spaceship name="Millennium Falcon"  speed={500} 
   hasRockets= {false} colors = {['black', 'red']} />,
  document.getElementById('main')
);

//require('./test/index-test.js'); // Leave this in!
