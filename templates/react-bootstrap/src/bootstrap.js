import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <App />
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
