import React from 'react';
import {BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

import './socials.css'

const fbStyle = { color: "blue", fontSize: "1.5em" }

const Socials = () => {
    return (
      <div className='app__nav-socials'>
          <div>
              <BsYoutube style= {fbStyle}/>
          </div>
          <div>
              <BsInstagram size = {150}/>
          </div>
          <div>
              <FaFacebookF size = {40}/>
          </div>
      </div>
    )
  }
  
  export default Socials