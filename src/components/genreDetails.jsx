import Header2 from "./header2"
import { SpotifyContext } from "../context/spotifyContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import PlayPlay from "./PlayPlay";





const GenreDetails = () => {
  const { songs } = useContext(SpotifyContext);
  const { id } = useParams();

  
  const genre = songs.find((g) => g.id === id);
  
//  console.log(songs)
//  console.log(genre)
  
  if (!genre) {
    return <div className="text-white">
      
      <p>
      {/* <PlayPlay  data={songs} /> */}

      </p>

      Genre not found</div>;
  }


  return (
  <div className="w-full relative h-auto">
            {console.log(genre.name)}

      <img className="m-auto w-full h-[300px] bg-cover bg-center rounded-tl-2xl rounded-tr-2xl" src={genre.image} />
      <div className="px-6 pt-4">
      
            

            <div className="absolute top-0 left-0 text-white w-full px-6 pt-4 ">
              
              <Header2 />
               

                <div className=" text-white pt-40">
                    <h1 className="text-[30px] font-bold">{genre.name}</h1>
                    <div className="flex gap-2">
                        <p className="text-base text-gray-300">Instrumental</p><span className="font-bold text-gray-300">.</span>
                        <p className="text-base text-gray-300">240 songs</p><span className="font-bold text-gray-300">.</span>
                        <p className="text-base text-gray-300">32 hours</p>
                    </div>
                </div>
            </div>
      

            <div className="flex gap-2.5 text-white">
                <img src="/shuffle.svg" />
                <p>Shuffle</p>
            </div>


    <div className="pt-6">
                {songs.map((artistList, index) => (
                 
                  
            <div  key={index} className="flex justify-between items-center ">
               <Link to={`/playerPage/${genre.id}`}>

                <div  className="flex gap-6">
                      
                      <img
                          className="pb-4 w-[100px] cursor-pointer"
                          src={artistList.image}
                          alt={artistList.name}
                      />

                    <div className="pt-2 max-w-[180px] overflow-x-hidden">
                        <h2 className="text-lg font-semibold text-white">{artistList.name}</h2>
                        <p  className="text-xs text-gray-300">{artistList.description}</p>
                   </div>
                   
                </div>

              </Link>
                

               


              <button className="flex justify-center gap-1 cursor-pointer ">
                <div className="h-[5px] w-[5px] bg-white rounded"></div>
                <div className="h-[5px] w-[5px] bg-white rounded"></div>
              </button>
           </div>
                  
                 
        ))}
    </div>

           
   </div>
     
 </div>
  )
}

export default GenreDetails
