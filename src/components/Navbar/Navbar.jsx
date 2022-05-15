import React from 'react';

import { Component } from 'react';

import './Navbar.scss'

class Navbar extends Component{

  render(){
      return(
          <ul className='app__header-navbar'>
            <div className='app__nav-link'>
              <li>
                <a href='#about' /*className= 'page-scroll'*/>
                  À Propos
                </a>
              </li>
              <div/>
            </div>
            
            <div className='app__nav-link'>
              <li>
                <a href='#expertise' className='page-scroll'>
                  Expertise
                </a>
              </li>
              <div/>
            </div>

            <div className='app__nav-link'>
              <li>
                <a href='#showcase' className='page-scroll'>
                  Videos
                </a>
              </li>
              <div/>
            </div>
            
            <div className='app__nav-link'>
              <li>
                <a href='#features' className='page-scroll'>
                  Qualités
                </a>
              </li>
              <div/>
            </div>
            
            {/*
            <li>
              <a href='#portfolio' className='page-scroll' >
                Gallery
              </a>
            </li>
            */}

            <div className='app__nav-link'>
              <li>
                <a href='#testimonials' className='page-scroll'>
                  Témoignages
                </a>
              </li>
              <div/>
            </div>
            
            
            <div className='app__nav-link'>
              <li>
                <a href='#team' className='page-scroll'>
                  Équipe
                </a>
              </li>
              <div/>
            </div>

            <div className='app__nav-link'>
              <li>
                <a href='#contact' className='page-scroll'>
                Rejoindre
                </a>
              </li>
              <div/>
            </div>
          </ul>
      )
    
    }
}

/*const Navbar = ({toggle}) => {
  return (
    <ul className='app__header-navbar'>
            <li>
              <a href='#about' className='page-scroll' onClick={toggle}>
                À Propos
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll' onClick={toggle}>
                Services
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll' onClick={toggle}>
                Qualités
              </a>
            </li>
            
            <li>
              <a href='#portfolio' className='page-scroll' >
                Gallery
              </a>
            </li>
            
            <li>
              <a href='#testimonials' className='page-scroll'>
                Témoignages
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Équipe
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
    </ul>
  )
}*/

export default Navbar