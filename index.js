const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

ReactDOM.render(
  <Spaceship name="Millennium Falcon" speed = {1000}/>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
