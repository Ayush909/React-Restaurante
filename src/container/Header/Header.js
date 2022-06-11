import React from 'react';

import classes from './Header.module.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';

const Header = () => {
  return (
    <React.Fragment>
      <div className={`${classes.app__header} app__wrapper section__padding`} id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavour"/>
          <h1 className={classes.app__header_h1}>The Key to Fine Dining</h1>
          <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, maxime? Eveniet hic voluptas voluptates accusamus porro nostrum nemo, nesciunt ex deleniti corporis at doloribus exercitationem, repellendus libero tempora reprehenderit! Nihil.</p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt="welcome" />
        </div>

      </div>
    </React.Fragment>
  )
};

export default Header;
