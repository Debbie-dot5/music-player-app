import React, {  useContext } from "react";
import { SpotifyContext } from "../context/spotifyContext";
import PlayMusicPageFunc from "./playMusicPageFunc";

const PlayMusicPage = () => {

  const context = useContext(SpotifyContext)

  if (!context) {
    console.error("SpotifyContext is not provided. Ensure SpotifyProvider is wrapping this component.");
    return null;
  }

  const {
    songs, 
    currentSong,
    isPlaying, 
    setCurrentSong,
    handlePlayAndPause,
    audioRef,
  } = context;


console.log(songs)


// the issue with this is that the functionality of this is another component and it has to also get data from spotifyContext 


  return (
    <div className="relative w-full">
      <div className="flex mx-auto pt-[100px] gap-6 overflow-x-scroll no-scrollbar ">

        {/* {songs.length > 0 ? (
          console.log('passing the song ui')
        ) : (
         <p>No songs available.</p>
        ) 
      } */}

        {songs.map((song) => (
          <div className={`cursor-pointer p-2 my-1 ${
            currentSong?.id === song.id ? "bg-gray-300" : "bg-white"}`}key={song.id} onClick={() =>{
             
            console.log(song)
             setCurrentSong(song)}}>
           <div className="w-[160px]">
           <img className="" src="/musicimg.svg"/>
           </div>

           <h1>{song.title}</h1>
           <p>{song.artist}</p>

          </div>
        ))}
      </div>


      {currentSong && (
        <div className="current-song">
          <h2 className="text-white">Now Playing : {currentSong.title} by {currentSong.artist}</h2>
          <button className="text-black bg-gray-400 py-2 px-4 rounded-xl"  onClick={handlePlayAndPause}>
          {isPlaying ?  "Pause" : "Play"}
          </button>
         

          <p className="text-white text-2xl">this is the current song: {currentSong.url}</p>


          <audio ref={audioRef}>
            <source src={currentSong.url} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  )
}

export default PlayMusicPage
