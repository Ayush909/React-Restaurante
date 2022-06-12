import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import classes from './Navbar.module.css'

const Navbar = () => {

  const [toggleMenu, setToggleMenu]  = useState(false);

  return (
    <React.Fragment>
      <nav className={classes.app__navbar}>
        <div className={classes.app__navbar_logo}>
          <img src={images.gericht} alt="logo" />
        </div>

        <ul className={classes.app__navbar_links}>
          <li className='p__opensans'><a href="#Home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#contact">Contact</a></li>         
        </ul>

        <div className={classes.app_navbar_login}>
          <a href="#login" className='p__opensans'>Log In / Register</a>
          <div/>
          <a href="#book" className='p__opensans'>Book Table</a>
        </div>

        
        <div className={classes.app_navbar_smallscreen}>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{ setToggleMenu(true)}}/>
          {toggleMenu && 
          <div className={`${classes.app__navbar_smallscreen_overlay} flex__center slide-bottom`}>
              <MdOutlineRestaurantMenu color='#fff' className={classes['overlay-close']} fontSize={27} onClick={()=>{ setToggleMenu(false)}}/>
              <ul className={classes.app__navbar_smallscreen_links}>
                <li className='p__opensans'><a href="#Home">Home</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#menu">Menu</a></li>
                <li className='p__opensans'><a href="#awards">Awards</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>         
              </ul>
          </div>}

        </div>


      </nav>
    </React.Fragment>
  )
}

export default Navbar;
