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

        div.app__chef_
      </div>
    </div>
  )
}

export default Chef