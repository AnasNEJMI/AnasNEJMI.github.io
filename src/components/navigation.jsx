import { images } from "../assets"
import Socials from "./socials"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

          <div className="app__navigation-logo">
            <img src={images.Logo} alt="logo" />
            <a className='navbar-brand page-scroll' href='#page-top'>
              EFE CONSTRUCTION
            </a>{' '} 
          </div>
        </div>

        <Socials/>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                À Propos
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Qualités
              </a>
            </li>
            {/*
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            */}
            
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
        </div>
      </div>
    </nav>
  )
}
