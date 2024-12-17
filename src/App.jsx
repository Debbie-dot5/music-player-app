import { SpotifyProvider } from "./context/spotifyContext"

import GenreRoutes from "./routes/genresRoute"

const App = () => {
  return (
<div className=" h-screen w-full  md:max-w-[400px] relative md:m-auto ">
    
  <div className="bg-[url('/first-circle.svg')] bg-no-repeat bg-right-top  w-full h-full ">
  
    <div className="bg-[url('/second-circle.svg')] bg-no-repeat bg-cover bg-bottom-left w-full h-screen">

    <SpotifyProvider>
        <GenreRoutes/>
      </SpotifyProvider>

    
      
    </div> 

  </div>
</div>
  )
}

export default App
