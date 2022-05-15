import { motion } from 'framer-motion';
import React from 'react';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';


import './Socials.scss';

const fbVariants = {
  closed : {y : - 20, opacity : 0, transition: {duration : 0.2}},
  open : {y: 0, opacity : 1, transition : {duration : 0.2}}
}

const instaVariants = {
  closed : {y : - 20, opacity : 0, transition: {duration : 0.2}},
  open : {y: 0, opacity : 1, transition : {duration : 0.2, delay: 0.2}}
}

const ybVariants = {
  closed : {y : - 20, opacity : 0, transition: {duration : 0.2}},
  open : {y: 0, opacity : 1, transition : {duration : 0.2, delay: 0.2}}
}


const Socials = (props) => {
  return (
    <div className='app__header-socials'>
      <div className='app__nav-social'>
        <motion.a href="https://www.facebook.com/" className='sidebar-fb-icon'
          variants={fbVariants}
          initial = "closed"
          animate = "open"
        >
          <FaFacebookF size = {35} />
        </motion.a>
      </div>
      <div className='app__nav-social'>
        <motion.a href="https://www.instagram.com/" className='sidebar-insta-icon'
          variants={instaVariants}
          initial = "closed"
          animate = "open"
        >
          <BsInstagram size = {40}/>
        </motion.a>
      </div>

      <div className='app__nav-social'>
        <motion.a href="https://www.youtube.com/" className='sidebar-yb-icon'
          variants={ybVariants}
          initial = "closed"
          animate = "open"
        >
          <BsYoutube size = {55}/>
        </motion.a>
      </div>
    </div>
  )
}

export default Socials