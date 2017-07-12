require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');

const PersonList = require('./components/person-list');

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<PersonList />, document.getElementById('app'));
});
