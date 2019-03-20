import React from 'react';

import './title.css';

const Title = ({label = 'Not found'}) => {
  return (
    <div className="title">
      <h2>{label}</h2>
    </div>
  );
};

export default Title;
