import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import classes from './Newsletter.module.css';


const Newsletter = () => (
  <div className={classes.app__newsletter}>
    <div className={classes.app__newsletter_heading}>
      <SubHeading title="Newsletter"/>
      <h1 className='headtext__cormorant'>Subscribe to our Newsletter</h1>
      <p className='p__opensans'>And never miss any updates.</p>
    </div>

    <div className={`${classes.app__newsletter_input} flex__center`}>
      <input type="email" placeholder='Enter Your Email Id' />
      <button type='submit' className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
