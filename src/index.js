import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import {skills, eduList, jobsList } from './data/datasource.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App skills= {skills} eduList= {eduList} jobsList= {jobsList}   />, document.getElementById('root'));
registerServiceWorker();
