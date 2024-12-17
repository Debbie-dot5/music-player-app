import { useContext} from "react"
import { SpotifyContext } from "../context/spotifyContext";
import { Link } from "react-router-dom";





const Genre = () => {


  const { songs } = useContext(SpotifyContext);


  return (
  <div className='px-6 w-full relative'>
    <h1 className='text-white text-lg font-bold'>Browse</h1>


    <div className='flex flex-row justify-start gap-4 items-center cursor-pointer  overflow-x-scroll no-scrollbar w-full'>
      {songs.map((genre) => (
        <Link to={`/genre/${genre.id}`} key={genre.id}>
            <div className='flex-shrink-0 w-[150px] cursor-pointer'>
            <img className='mb-4 rounded-xl' src={genre.image} alt={genre.name} onError={(e) =>(e.target.src = "/default-image.svg")}/>
            <h3 className='font-bold text-white text-base overflow-y-hidden'>{genre.name}</h3>
            {/* <p className='text-gray-300 text-sm'>{genre.description}</p> */}
            </div>
        </Link>

      ))}

     

    </div>   

  </div>
  )
}

export default Genre
