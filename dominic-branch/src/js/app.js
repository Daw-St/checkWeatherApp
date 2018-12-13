import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css/main.scss';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './Components/HomePage/HomePage';
import MainApp from './Components/MainApp/MainApp';



ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/weatherApp" component={MainApp}/>
          <Route path="/" component={HomePage}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();