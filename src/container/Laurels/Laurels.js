import React from 'react'
import { SubHeading } from '../../components'
import classes from './Laurels.module.css'
import {data,images} from '../../constants'

const AwardCard = ({award:  {imgUrl,title,subtitle}}) => {
  return (
    <div className={classes.app__awards_card}>
      <img src={imgUrl} alt="award" />

      <div className={classes.app__awards_card_content}>
        <p className="p__cormorant" style={{color: '#dcca87'}}>{title}</p>
        <p className="p__cormorant" >{subtitle}</p>
      </div>

    </div>
  )
}

const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className="app__wrapper_info">
          <SubHeading title="Awards & Recognition" />
          <h1 className="headtext__cormorant">Our Laurels</h1>

          <div className={classes.app__awards_list}>
            {data.awards.map(award => <AwardCard award={award} key={award.title}/>)}
          </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>


    </div>
  )
}

export default Laurels