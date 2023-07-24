import React from 'react'
import ReactPlayer from "react-player";
import {
    Player,
    ControlBar,
 
    BigPlayButton,
 PosterImage,
   
    ReplayControl,
    ForwardControl,
    ClosedCaptionButton,
    PlaybackRateMenuButton,
  } from "video-react";
  import logo from "../Image/bg.jpg";

const PlayerVideo = () => {
  return (
    <div className="player-container">
   <div className='player-wrapper'>
   <Player className='Player'
         
         playsInline
        
         height={100}
         width={100}i
         
         fluid={true} // Set fluid to true for responsive behavior
         poster={logo}
         src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
         
       >
       


         <track
           kind="captions"
           src="/assets/elephantsdream/captions.en.vtt"
           srcLang="en"
           label="English"
           default
           
         />
         
       
         <track
           kind="captions"
           src="/assets/elephantsdream/captions.ar.vtt"
           srcLang="ar"
           label="Arabic"
         />
   
        
      
   
         <BigPlayButton position="center" />
   
         <ControlBar className='' autoHide={true}>
         <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
           <ReplayControl seconds={10} order={2.2} />
           <ForwardControl seconds={10} order={3.2} />
          
   
           <ClosedCaptionButton order={7} />
         </ControlBar>
       </Player>
   </div>
   
    </div>  
  )
}

export default PlayerVideo
