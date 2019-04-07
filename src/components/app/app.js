import React, { Component } from 'react';

import AppHeader from '../app-header'
import Dashboard from '../../pages/dashboard'
import AddPage from '../../pages/add-page';
import DeletePage from '../../pages/delete-page';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import ItemstoreService from './../../services/itemstore-service';
import { ItemstoreServiceProvider } from './../../components/itemstore-service-context';

import store from '../../store';

export default class App extends Component {

  state = {
    storageData: [],
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
    const itemstoreService = new ItemstoreService();

    return (
      <Provider store={store}>
        <ItemstoreServiceProvider value={itemstoreService}>
          <Router>
            <div className="storage-app">          
              <AppHeader />
              <div className="container">
                <Route path="/" render={() => <h1>Welcome to Storage App</h1>} exact></Route>
                <Route path="/dashboard" render={() => <Dashboard tableData={visibleItems} onSearchChange={this.onSearchChange}/>}></Route>
                <Route path="/add-item" component={AddPage}></Route>
                <Route path="/delete-item" component={DeletePage}></Route>
              </div>
            </div>
          </Router>
        </ItemstoreServiceProvider>
      </Provider>
      
    );
  }
};
