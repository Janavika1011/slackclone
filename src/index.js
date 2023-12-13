// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from "./components/Auth/Register/Register.component";
import Main from "./components/Auth/main/main.component"; // Correcting the import path
import Login from "./components/Auth/Login/Login.component";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
        <Route component={Login} /> {/* This will be the default route */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
