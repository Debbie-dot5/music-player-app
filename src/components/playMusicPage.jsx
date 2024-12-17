import  { useState, useContext, useEffect,  } from "react";
import { SpotifyContext } from "../context/spotifyContext";
import { useParams } from "react-router-dom";
import Header2 from "./header2";









const PlayMusicPage = () => {

  const { 
        songs, 
        currentSong, 
        isPlaying, 
        setCurrentSong,
        handlePlayAndPause, 
        audioRef } = useContext(SpotifyContext);


        const { id } = useParams();
        const music = songs.find((m) => m.id === id);

        console.log(music)


        useEffect(() => {
          // Set the selected song as the current song
          if (music) {
            setCurrentSong(music);
          }
        }, [id, music, setCurrentSong]);



        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);
        const [isDragging, setIsDragging] = useState(false);



        // function for handling the progress bar ; which updates the progress bar as the song plays 
        useEffect(() => {
          const audio = audioRef.current;
      
          const handleTimeUpdate = () => {
            if (!isDragging) setCurrentTime(audio.currentTime);
          };
      
          const handleLoadedMetadata = () => {
            setDuration(audio.duration);
          };
      
          if (audio) {
            audio.addEventListener("timeupdate", handleTimeUpdate);
            audio.addEventListener("loadedmetadata", handleLoadedMetadata);
          }
      
          return () => {
            if (audio) {
              audio.removeEventListener("timeupdate", handleTimeUpdate);
              audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            }
          };
        }, [audioRef, isDragging]);


      // handle seeking 

      const handleSeek = (event) => {
        const progressBar = event.target;
        const clickPosition = event.nativeEvent.offsetX;
        const progressBarWidth = progressBar.offsetWidth;
    
        const newTime = (clickPosition / progressBarWidth) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      };



      const handleDragStart = () => setIsDragging(true);

          const handleDrag = (event) => {
            if (isDragging) {
              const progressBar = event.target.closest(".progress-bar");
              if (progressBar) {
                const rect = progressBar.getBoundingClientRect();
                const newTime = ((event.clientX - rect.left) / rect.width) * duration;
                setCurrentTime(Math.max(0, Math.min(duration, newTime)));
              }
            }
          };

          const handleDragEnd = () => {
            setIsDragging(false);
            if (audioRef.current) {
              audioRef.current.currentTime = currentTime;
            }
          };


          const handlePrevious = () => {
            const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
            const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
            setCurrentSong(songs[previousIndex]);
          };
        
          const handleNext = () => {
            const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
            const nextIndex = (currentIndex + 1) % songs.length;
            setCurrentSong(songs[nextIndex]);
          };


          return (
            <div className="relative w-full mx-auto px-2 py-4  ">
              <Header2 />
              {/* Song List */}
              <div className="flex mx-auto pt-[30px] pb-[0px] gap-2 overflow-x-scroll no-scrollbar">
                {songs.map((song) => (
                  <div className={`cursor-pointer p-2 my-1 rounded-xl`}
                    key={song.id}
                    onClick={() => setCurrentSong(song)}
                  >
                    <div className="w-[230px]">
                      <img className="rounded-3xl" src={song.image} alt={song.title} />
                    </div>
                    <h1 className="text-center text-white text-[16px] font-bold mt-4">{song.name}</h1>
                    <p className="text-center text-gray-300 text-[13px] font-bold pt-1">{song.artist}</p>
                  </div>
                ))}
              </div>
        
              {/* Current Song and Player Controls */}
              {currentSong && (
                <div className="current-song mx-auto mt-2 mb-4 text-center ">
                  <h2 className="text-white mb-6">
                    Now Playing: <br />
                    {currentSong.name} by {currentSong.artist}
                  </h2>

        
                  {/* Progress Bar with Dot Controller */}
                  <div
                    className="progress-bar bg-gray-100 w-full h-0.5 rounded-lg my-4 mx-auto relative"
                    onClick={handleSeek}
                  >
                    {/* Progress Indicator */}
                    <div
                      className="progress bg-transparent h-full rounded-lg"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
        
                    {/* Draggable Circle */}
                    <div
                      className="circle w-4 h-4 bg-gray-400 rounded-full absolute top-1/2 transform -translate-y-1/2"
                      style={{
                        left: `calc(${(currentTime / duration) * 100}% - 8px)`,
                        cursor: "pointer",
                      }}
                      draggable
                      onDragStart={handleDragStart}
                      onDrag={handleDrag}
                      onDragEnd={handleDragEnd}
                    ></div>


                  <div className="flex justify-between text-end text-white text-lg mb-4 mt-2 ">
                   <p> {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, "0")}  </p>
                   <p> {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, "0")} </p>
                  </div>


                   {/* prev and next button */}

                <div className="flex justify-center gap-8 mb-10  items-center">
                    <button onClick={handlePrevious}
                    >
                     <img src="/prevbutton.svg" alt="previous button" />
                    </button>

                  {/* play and pause button */}

                  <button
                    className="text-black bg-gray-200 py-4 px-4 rounded-full"
                    onClick={handlePlayAndPause}
                  >
                    {isPlaying ? <img src="/pauseIcon.svg" alt="pause"/> : <img className="w-[30px]" src="/playIcon.svg" alt="play"/>}
                  </button>


                    <button onClick={handleNext}>
                    <img src="/nextButton.svg" alt="next button" />
                    </button>
                  </div>

                  </div>
        
        
                  <audio ref={audioRef}>
                    <source src={currentSong.previewUrl} type="audio/mpeg" />
                  </audio>
                </div>
              )}
            </div>
          );


}

export default PlayMusicPage
