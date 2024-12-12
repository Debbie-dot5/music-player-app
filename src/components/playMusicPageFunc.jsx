import React, { createContext, useState, useEffect } from 'react'


const PlayMusicPageFunc = () => {

    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); 
    const audioRef = React.useRef(null);

    
    
    const handlePause = ()=>{
        if(audioRef.current){
            audioRef.current.pause();
            setIsPlaying(false)
        }
    }
  
    const handlePlay = async ()=>{
        if (audioRef.current) {
            try{
                await audioRef.current.play();
                setIsPlaying(true)
            } catch(error){
                console.log("Error playing audio", error)
            }
        }        
      }
      
      console.log(isPlaying)
    
      const handlePlayAndPause = () => {
        if (isPlaying) {
          handlePause()
        } else {
         handlePlay()
        }
      };


      useEffect(() => {
        if (audioRef.current) {
          audioRef.current.load(); 
          if (isPlaying) {
            audioRef.current.play().catch((error) => console.error("Error playing a new song:", error)) 

          }
        }
     }, [currentSong])


    
    return {
        currentSong,
        isPlaying, 
        setCurrentSong,
        handlePlay,
        handlePause, 
        handlePlayAndPause,
        audioRef,
    }
}

export default PlayMusicPageFunc
