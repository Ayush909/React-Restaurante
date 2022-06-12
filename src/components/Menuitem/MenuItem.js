import React from 'react';

import classes from './MenuItem.module.css';

const MenuItem = ({title,price,key,tags}) => (
  <div className={classes.app__menuItem}>

    <div className={classes.app__menuItem_heading}>
      <div className={classes.app__menuItem_title}>
        <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      </div>

      <div className={classes.app__menuItem_dash}/>

      <div className={classes.app__menuItem_price}>
        <p className='p__cormorant'>{price}</p>
      </div>

    </div>

    <div className={classes.app__menuItem_sub}>
      <p className="p__opensans" style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
