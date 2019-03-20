import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import HeaderAppBar from './components/header-app-bar'
import Dashboard from './components/dashboard'
import AddPage from './components/add-page';
import DeletePage from './components/delete-page';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <HeaderAppBar />
          <div className="main-wrapper">
            <Route path="/"
              render={() => <Typography variant="h2" component="h2">Welcome to Storage App</Typography>}
              exact />

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/add-item" component={AddPage} />            
            <Route path="/delete-item" component={DeletePage} />            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
