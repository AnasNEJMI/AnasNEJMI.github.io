import React from 'react';

import './Navlink.scss';

const Navlink = ({content}, {index}) => {
  return (
    <div className='app__header-navlink'>

        <li key= {`link-${content}`}>
          <a href={`#${content}`}>{content}</a>
        </li>
        <div/>
    </div>
  )
}

export default Navlink