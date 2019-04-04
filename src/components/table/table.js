import React from 'react';

import TableItem from '../table-item'
import './table.css';

const Table = ({tableData}) => {
      
  const items = tableData.map((item) => {
    return <TableItem key={item.id} itemData={item}/>
  });
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Number</th>
          <th scope="col">Price</th>
          {/* Action component? */}
          <th scope="col" className="action-col">Action</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
};

export default Table;