
// when text[recomendation] is hovered increase font size and add a line under the text on hover 

import { SpotifyContext } from "../context/spotifyContext";
import { Link, useParams } from "react-router-dom"
import { useContext } from "react"


const MusicandAuthor = () => {

  const { songs } = useContext(SpotifyContext);

  // const { id } = useParams();  
  // const song = songs.find((a) => a.id === id);


   
  if (!songs) {
    return <div className="text-white">
      
      <p>
      {/* <PlayPlay  data={songs} /> */}

      </p>

      Song not found</div>;
  }




  return (
    <div className="px-6 pt-4 w-full relative">
       <div className="flex justify-between w-full overflow-x-scroll no-scrollbar">
            
            <h3 className="text-white mb-4 font-bold text-[16px] flex-shrink-0 w-[170px] cursor-pointer relative group">
              Recommendation
              <span className="absolute top-full left-0 h-[2px] w-16 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h3>

          
            <h3 className="text-gray-300 mb-4 flex-shrink-0 w-[100px] cursor-pointer relative group">
              Popular
              <span className="absolute  top-full left-0 h-[2px] w-6 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h3>

          
            <h3 className="text-gray-300 mb-4 flex-shrink-0 w-[100px] cursor-pointer relative group">
              New Music
              <span className="absolute top-full left-0 h-[2px] w-6 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h3>
      </div>


      <div className="pt-6">
        {songs.map((musicList, index) => (
          <Link key={index}  to={`/artistpage/${musicList.id}`}>
          
            <div className="flex justify-between items-center ">
                <div className="flex gap-6">
                   <img className="pb-4 w-[100px] " src={musicList.image}  alt={musicList.name}/>
                    <div className="pt-2">
                        <h2 className="text-lg font-semibold text-white">{musicList.name}</h2>
                        <p  className="text-sm text-gray-300">{musicList.artist}</p>
                   </div>
                   
                </div>

                <button className="flex justify-center gap-1 cursor-pointer ">
                <div className="h-[5px] w-[5px] bg-white rounded"></div>
                <div className="h-[5px] w-[5px] bg-white rounded"></div>
              </button>
           </div>
          
          </Link>
        ))}
      </div>
      
    </div>
  )
}

export default MusicandAuthor
