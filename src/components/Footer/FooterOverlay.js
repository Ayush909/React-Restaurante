import React from 'react';

import classes from './FooterOverlay.module.css';

const FooterOverlay = () => (
  <div className={classes.app__footeroverlay}>
    <div className="app__footeroverlay_black"></div>
    <div className="app__footeroverlay_img app__bg"></div>
  </div>
);

export default FooterOverlay;
