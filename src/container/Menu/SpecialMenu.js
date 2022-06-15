import React from 'react';
import { SubHeading } from '../../components';
import data from '../../constants/data';
import images from '../../constants/images'
import classes from './SpecialMenu.module.css';
import MenuItem from '../../components/Menuitem/MenuItem';

const SpecialMenu = () => {
  return (
    <div className={`${classes.app__specialMenu} flex__center section__padding`} id="menu">
      <div className={classes.app_specialMenu_title}>
        <SubHeading title="Menu that fits you Palatte"/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className={classes.app__specialMenu_menu}>
        <div className={classes.app_specialMenu_menu_wine}>
          <p className={classes.app__specialMenu_menu_heading}>Wine & Beer</p>
          <div className={classes.app_specialMenu_menu_items}>
            {data.wines.map((wine,index)=>(
              <MenuItem title={wine.title} price={wine.price} key={wine.title + index} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className={classes.app__specialMenu_img}>
          <img src={images.menu} alt="menu" />
        </div>

        <div className={classes.app_specialMenu_menu_cocktail}>
          <p className={classes.app__specialMenu_menu_heading}>Cocktails</p>
          <div className={classes.app_specialMenu_menu_items}>
            {data.cocktails.map((cocktail,index)=>(
             <MenuItem title={cocktail.title} price={cocktail.price} key={cocktail.title + index} tags={cocktail.tags}/>
            ))}
          </div>
        </div>

        
      </div>

      <div>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
};

export default SpecialMenu;
