import React,{useRef,useState} from 'react'
import classes from './Intro.module.css'
import { BsFillPlayFill,BsPauseFill } from "react-icons/bs";

import {meal} from '../../constants/index'


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const videoPlayHandler = () => {
    setPlayVideo((prevState) => !prevState);

    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  return (
    <div className={classes.app__video}>
      <video src={meal} controls={false} loop type="video/mp4" muted ref={vidRef}/>

      <div className={`${classes.app__video_overlay} flex__center`}>
        <div className={`${classes.app__video_overlay_circle} flex__center`} onClick={videoPlayHandler}>
            {playVideo ? <BsPauseFill color='#fff' fontSize={30}/> : <BsFillPlayFill color='#fff' fontSize={30}/>}
        </div>
      </div>
    </div>

    
  )
}

export default Intro