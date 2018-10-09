import React from 'react';

import './UserOutput.css';

// props inherits args passed in from App.js ... look at where userOutput is being called... there is a property being associated
const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p> Username: {props.userName}</p>
      <p> Some other text</p>
    </div>
  );
};

export default userOutput;