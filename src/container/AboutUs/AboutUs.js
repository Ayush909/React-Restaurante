import React from 'react';

import classes from './AboutUs.module.css';
import images from '../../constants/images'


const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={`${classes.app__aboutus} app__bg flex__center section__padding`} id="about">
        <div className={classes.app__aboutus_overlay}>
          <img src={images.G} alt="g overlay" />
        </div>

        <div className={`${classes.app__aboutus_content} flex__center`}>

            <div className={classes.app__aboutus_content_about}>
              <h1 className='headtext__cormorant'>About Us</h1>
              <img src={images.spoon} alt="spoon" className='spoon__img'/>
              <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae eveniet totam sed facere fuga iure quo eius officia, voluptate nemo voluptatibus voluptatum accusamus rem cumque quibusdam suscipit ipsa ab?</p>
              <button className='custom__button' type='button'>Know More</button>
            </div>

            <div className={`${classes.app__aboutus_content_knife} flex__center`}>
              <img src={images.knife} alt="knife" />
            </div>

            <div className={classes.app__aboutus_content_history}>
              <h1 className='headtext__cormorant'>Our History</h1>
              <img src={images.spoon} alt="spoon" className='spoon__img'/>
              <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae eveniet totam sed facere fuga iure quo eius officia, voluptate nemo voluptatibus voluptatum accusamus rem cumque quibusdam suscipit ipsa ab?</p>
              <button className='custom__button' type='button'>Know More</button>
            </div>

        </div>
      </div>
    </React.Fragment>
  )

};

export default AboutUs;
