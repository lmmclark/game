import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
    BrowserRouter as Router,
} from 'react-router-dom'

import Routers from './Routes'
import './index.css';

ReactDOM.render(
    <Router>
        <Routers/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
