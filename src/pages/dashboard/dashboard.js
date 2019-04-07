import React, { Component } from 'react';

import Title from '../../components/title'
import SearchPanel from '../../components/search-panel'
import StorageTable from '../../containers/storage-table'
import './dashboard.css';

export default class Dashboard extends Component {
  

  render() {
    const {onSearchChange} = this.props;

    return (      
      <div className="dashboard">
        <Title label="Dashboard"/>

        <SearchPanel onSearchChange={onSearchChange}/>
        <StorageTable />
      </div>
    );
  }
};