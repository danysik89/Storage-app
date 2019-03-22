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
      {title: 'Steak', number: 8, price: 89, id: '04'},
      {title: 'Cruasan', number: 13, price: 12, id: '05'}
    ],
    term: ''
  }

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });   
  }

  onSearchChange = (term) => {
    this.setState({ term })
  }

  render() {

    const { storageData, term } = this.state;
    
    const visibleItems = this.search(storageData, term);

    return (
      <div className="storage-app">
        <AppHeader />
        
        <div className="container">
          <Dashboard tableData={visibleItems} onSearchChange={this.onSearchChange}/>
        </div>
      </div>
    );
  }
};
