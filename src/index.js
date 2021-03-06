import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './components/sobre/Sobre';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}></Route>
            <Route path="/Sobre" component={Sobre}></Route>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

    
serviceWorker.register();
