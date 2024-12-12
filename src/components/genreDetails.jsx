import Header2 from "./header2"
import { useParams } from "react-router-dom"
import { SpotifyContext } from "../context/spotifyContext";
import { useContext } from "react";


// const artistLists = [
//     {
//         img: '/artist1.svg',
//         songTitle: "BORN TO DIE",
//         artist: "Lana Del Rey",
//       },
//       {
//         img: '/artist2.svg',
//         songTitle: "JOLENE",
//         artist: "Dolly Parton",
//       },
//       {
//         img: '/artist3.svg',
//         songTitle: "WRECKING BALL",
//         artist: "Miley Cyrus",
//       },
//       {
//         img: '/artist4.svg',
//         songTitle: "BUTTER",
//         artist: "BTS",
//       },
//       {
//         img: '/artist5.svg',
//         songTitle: "BABY",
//         artist: "Justin Bieber",
//       },
//   ]


const GenreDetails = () => {
  const { songs } = useContext(SpotifyContext);
  const { id } = useParams();

  const genre = songs.find((g) => g.id === id);

  if (!genre) {
    return <div className="text-white">Genre not found</div>;
  }


  return (
  <div className="w-full relative h-auto">
      
      <img className="m-auto w-full" src="/clearmind.svg" />
      <div className="px-6 pt-4">
      
            


            <div className="absolute top-0 left-0 text-white w-full px-6 pt-4 ">
              
              <Header2 />
               

                <div className="pt-40">
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
                {genre.map((artistList, index) => (
            <div key={index} className="flex justify-between items-center ">
                <div className="flex gap-6">
                   <img className="pb-4" src={artistList.img}/>
                    <div className="pt-2">
                        <h2 className="text-lg font-semibold text-white">{artistList.name}</h2>
                        <p  className="text-sm text-gray-300">{artistList.name}</p>
                   </div>
                   
                </div>

                <div className="flex justify-center gap-1 ">
                    <button><img src="/dot.svg"/></button>
                    <button><img src="/dot.svg"/></button>
                </div>
           </div>
        ))}
    </div>

           
   </div>
     
 </div>
  )
}

export default GenreDetails
