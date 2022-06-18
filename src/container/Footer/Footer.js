import React from 'react'
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
import {Newsletter,FooterOverlay} from '../../components'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={`${classes.app__footer}  section__padding`}>
      {/* <FooterOverlay/> */}
      <Newsletter/>
    </div>
  )
}

export default Footer