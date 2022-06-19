import React from 'react'
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
import {Newsletter} from '../../components'
import images from '../../constants/images'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={`${classes.app__footer}  `}>
      {/* <FooterOverlay/> */}
      <Newsletter/>
      <div className={classes.app__footer_links}>
        <div className={classes.app__footer_links_contact}>
          <h1 className={classes.app__footer_headtext}>Contact Us</h1>
          <p className="p__opensans">Dorotheenstraße 65, 10117 Berlin, Germany</p>
          <p className="p__opensans">+49 212-309-8080</p>
          <p className="p__opensans">+49 312-309-7080</p>
        </div>

        <div className={classes.app__footer_links_logo}>
          <img src={images.gericht} alt="logo" />
          <p className="p__opensans">There is no love sincerer than the love of food.</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop : '15px'}}/>
          <div className={classes.app__footer_social_icons}>
            <FiFacebook/>
            <FiInstagram/>
            <FiTwitter/>
          </div>
        </div>

        <div className={classes.app__footer_links_work}>
          <h1 className={classes.app__footer_headtext}>Working Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">10am - 11pm</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">10am - 12am</p>
          
        </div>


      </div>

      <div className={classes.app__footer_copyright}>
        <p className='p__opensans'>2022 Gerícht. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer