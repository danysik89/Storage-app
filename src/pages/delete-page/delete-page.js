import React, { Component } from 'react';

import Title from '../../components/title'
import './delete-page.css';

export default class DeletePage extends Component {
  

  render() {

    return (      
      <div className="delete-page">
        <Title label="Delete item"/>

      </div>
    );
  }
};