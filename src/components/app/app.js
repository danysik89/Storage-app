import React, { Component } from 'react';

import AppHeader from '../app-header'
import Dashboard from '../../pages/dashboard'
import './app.css';

export default class App extends Component {

  state = {
    storageData: [
      {title: 'Pizza', number: 23, price: 13, id: '01'},
      {title: 'Burger', number: 42, price: 7, id: '02'},
      {title: 'Hot dog', number: 26, price: 6, id: '03'},
      {title: 'Steak', number: 8, price: 89, id: '04'}
    ]
  }

  render() {
    return (
      <div className="storage-app">
        <AppHeader />
        
        <div className="container">
          <Dashboard tableData={this.state.storageData}/>
        </div>
      </div>
    );
  }
};
