import React, { Component } from 'react';

import Title from '../../components/title'
import SearchPanel from '../../components/search-panel'
import StorageTable from '../../containers/storage-table'
import './dashboard.css';

export default class Dashboard extends Component {

  render() {
    return (      
      <div className="dashboard">
        <Title label="Dashboard"/>

        <SearchPanel />
        <StorageTable />
      </div>
    );
  }
};