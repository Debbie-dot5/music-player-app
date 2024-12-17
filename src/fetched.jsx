// import { useEffect } from "react";

// const Fetched = () => {
//   const getMusic = async() => {
//     const url = 'https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '98f6c97830msh9c98c82fa2914e2p18e135jsn7806596509bf',
// 		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
//   console.log(result.data.album.tracks.items);


// } catch (error) {
// 	console.error(error);
// }
//   }n
// useEffect(() => {
//  getMusic()
// },[])



//  return (
//   <div>app</div>
//  )
// }

// export default Fetched 