import Header from "./components/header"
import MusicandAuthor from "./components/musicAndauthor"
import Genre from "./components/genre"
import GenreDetails from "./components/genreDetails"
import PlayMusicPage from "./components/playMusicPage"
import { SpotifyProvider } from "./context/spotifyContext"

const App = () => {
  return (
<div className=" h-screen w-full  md:max-w-[400px] relative md:m-auto ">
    
  <div className="bg-[url('/first-circle.svg')] bg-no-repeat bg-right-top  w-full h-full ">
  
    <Header />
   


    {/* <SpotifyProvider>
       <SongArray />
    </SpotifyProvider> */}

  

   {/* this is where the other elements will be added  */}

    <div className="bg-[url('/second-circle.svg')] bg-no-repeat bg-cover bg-bottom-left w-full h-screen">

    <SpotifyProvider>
        <Genre />
    </SpotifyProvider>
    

      <MusicandAuthor />

      <SpotifyProvider>
        <GenreDetails />
      </SpotifyProvider>
      
      {/* displaysimilar is for when i cick on any of the genre that it dsiplay then details of the genre like tracks under such genre */}
      {/* while  for musicAnd Author. This is the landing page, and when any of the nusic is clicked it is directed to the play page i.e where you cab play the song */}

    </div> 

  </div>
</div>
  )
}

export default App
