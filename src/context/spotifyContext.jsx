import React,  { createContext, useEffect,  useState } from "react";


export const SpotifyContext = createContext();

export const SpotifyProvider = ({ children  }) => {

    // complete  data
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); 
    const audioRef = React.useRef(null);




   



// first data fetched 
useEffect(() => {
  const fetchedAlbum = async () => {
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '98f6c97830msh9c98c82fa2914e2p18e135jsn7806596509bf',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
          }
        };

      try {
          const response = await fetch(
              'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options
          );

          const data = await response.json();

          console.log("API Response:", data.items);

         

          const formattedSongs = data.items.map((item) => {
            const track = item.track;

           

  
            return {
              id: track.id, // Song ID
              name: track.name, // Song name
              previewUrl: track.preview_url, // Preview URL
              image: track.album.images[0]?.url || "/default-image.svg", // Song image
              artist: track.artists[0]?.name || "Unknown Artist", // First artist name
              album: track.album.name, // Album name
              addedAt: item.added_at, // Added date
            };
          });
      

          setSongs(formattedSongs); 
          console.log("Formatted Songs:", formattedSongs);
      } catch (error) {
          console.error("Error fetching songs:", error);
      }
  };

  fetchedAlbum();
}, []);


   


    const handlePause = () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      };


      const handlePlay = async () => {
        if (audioRef.current) {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
          } catch (error) {
            console.log("Error playing audio", error);
          }
        }
      };


      const handlePlayAndPause = () => {
        if (isPlaying) {
          handlePause();
        } else {
          handlePlay();
        }
      };


      useEffect(() => {
        if (audioRef.current) {
          audioRef.current.load(); 
          if (isPlaying) {
            audioRef.current.play().catch((error) => console.error("Error playing a new song:", error));
          }
        }
      }, [currentSong]);
    





    return (
        <SpotifyContext.Provider value={{ 
            songs,
            currentSong,
            isPlaying,
            setCurrentSong,
            handlePlayAndPause,
            audioRef

        }}>
            {children}

          
        </SpotifyContext.Provider>
    )

}