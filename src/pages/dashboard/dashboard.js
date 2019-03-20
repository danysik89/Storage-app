import React, { Component } from 'react';

import Title from '../../components/title'
import './dashboard.css';

export default class Dashboard extends Component {

  render() {
    return (      
      <div className="dashboard">
        <Title label="Dashboard"/>
        Dashboard        
      </div>
    );
  }
};