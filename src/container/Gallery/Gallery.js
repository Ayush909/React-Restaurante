import React,{useRef} from 'react'
import classes from './Gallery.module.css'
import { SubHeading } from '../../components'
import {data,images} from '../../constants'
import {BsArrowLeftShort,BsArrowRightShort,BsInstagram} from 'react-icons/bs'


const Gallery = () => {

  const scrollRef  = useRef(null);

  const galleryImgs = [images.gallery01,images.gallery02, images.gallery03, images.gallery04];

  const scroll = (str) => {
    // console.log(str)
    const {current} = scrollRef;
    if(str === 'left'){
      current.scrollLeft  -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }

  return (
    <div className={`${classes.app__gallery} flex__center`}>
      <div className={classes.app__gallery_content}>
        <SubHeading title="Instagram"/>
        <p className="headtext__cormorant">
          Gallery
        </p>
        <p className="p__opensans" style={{color : '#AAA', marginTop : '2rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab suscipit maxime explicabo amet perferendis dignissimos eum velit?</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className={classes.app__gallery_images}>
        <div className={classes.app__gallery_images_container} ref={scrollRef}>
            {galleryImgs.map( (image,index) => (
              <div 
                className={`${classes.app__gallery_images_card} flex__center`} 
                key={`gallery-image-${index+1}`}
              >
                <img src={image} alt="gallery" />
                <BsInstagram className={classes.gallery_social_icon}/>
              </div>
            ))}
        </div>

        <div className={classes.app__gallery_images_arrow}>
          <BsArrowLeftShort color='#fff' className={classes.gallery_arrow_icons} onClick={()=>scroll('left')}/>
          <BsArrowRightShort color='#fff' className={classes.gallery_arrow_icons} onClick={()=>scroll('right')}/>
        </div>
      </div>


    </div>
  )
}

export default Gallery