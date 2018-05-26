import React from 'react';

import './Wrapper.scss';

const Wrapper = (props) => {
  return (
    <div className='Wrapper'>
      <div className='Wrapper__child'>
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper