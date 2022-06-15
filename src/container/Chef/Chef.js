import React from 'react';
import classes from './Chef.module.css';
import images from '../../constants/images'
import { SubHeading } from '../../components';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word"/>
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className={classes.app__chef_content}>
          <div className={classes.app__chef_quote}>
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor.
            </p>
          </div>

          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi delectus quibusdam doloremque expedita incidunt possimus quam inventore similique minima dolorem et, deserunt corrupti sunt recusandae repudiandae assumenda ratione quo.
          </p>
        </div>

        <div className={classes.app__chef_sign}>
          <p >John Doe</p>
          <p className="p__opensans">Chef & Founder</p>

          <img src={images.sign} alt="chef_sign" />
        </div>
        

      </div>
    </div>
  )
}

export default Chef