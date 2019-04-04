import React from 'react';

import Table from '../../components/table'
import './storage-table.css';

const TodoList = ({tableData}) => {

  return (
    <div className="storage-table">
      <Table tableData={tableData} />
    </div>
  );
};

export default TodoList;
