const React = require('react');
const ReactDOM = require('react-dom');

const Car = require('./components/Car');

ReactDOM.render(
  <Car name="V8 Interceptor" />,
  document.getElementById('main')
);
