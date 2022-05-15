import { Component } from "react";
import { motion } from "framer-motion";

import './nav.scss';

import Navbar from '../../components/Navbar/Navbar';
import Socials from '../../components/Socials/Socials';
import MenuToggle from '../../components/MenuToggle/MenuToggle';

import { images } from '../../assets';

const titleVariants = {
  closed : {y : 10, opacity : 0, transition: {duration : 0.2}},
  open : {y: 0, opacity : 1, transition : {duration : 0.2}}
}

class Nav extends Component{

    render(){
        return(
          <div 
            className='app__header'
          >
            <div className="app__navigation-logo">
              <img src={images.Logo} alt="logo" />
              <motion.a 
                className='app__nav-logo-text page-scroll' 
                href='#page-top'
              >
                EFE CONSTRUCTION
              </motion.a>{' '} 
            </div>
  
            <div className='app__header-spacer'/>
  
            <Navbar/>
            <div className='app__header-spacer'/>

            <div className="app__nav_spacer"/>
            <Socials/>
            <MenuToggle  toggle={this.props.toggleSideBar} openState = {this.props.openState}/>
      </div>
      )
    }
  }
  
  export default Nav;