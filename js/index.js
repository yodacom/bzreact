require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');

const Person = require('./components/person');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Person />, document.getElementById('app'));
});

