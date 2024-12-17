
// const PlayPlay = ({ data }) => {
//   console.log(data);

//   return (
//     <div>
//       {data.map((item, index) => {
//         return (
//           <div key={index} className="flex flex-col">
//             <p className="text-white">{item.id}</p>
//             <p className="text-white">{item.label}</p>
//             <p className="text-white">{item.name}</p>
//             <a href={item.uri} className="text-white">{item.uri}</a>
//             <h2 className="text-xl font-extrabold">Tracks</h2>

//             {/* Display album images */}
//             <div className="flex gap-4 mb-4">
//               {item.images.map((image, imgIndex) => (
//                 <img
//                   key={imgIndex}
//                   src={image.url}
//                   alt={`Album Image ${imgIndex + 1}`}
//                   className="w-32 h-32 object-cover"
//                 />
//               ))}
//             </div>

//             <div>
//               {item.tracks.items.map((track, trackIndex) => {
//                 return (
//                   <div key={trackIndex} className="flex flex-col mb-2">
//                     {/* Render track details */}
//                     <p className="text-white">{track.name}</p> {/* Track name */}
//                     <p className="text-gray-300">
//                       {track.artists.map((artist) => artist.name).join(', ')}
//                     </p> {/* Artist names */}
//                     <a href={track.uri} className="text-white">{track.uri}</a> {/* Track URI */}

//                     {/* If you want to display a track-specific image (if available) */}
//                     <div className="mt-2">
//                       {track.album && track.album.images && track.album.images.length > 0 && (
//                         <img
//                           src={track.album.images[0].url}
//                           alt={`${track.name} Cover`}
//                           className="w-32 h-32 object-cover"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PlayPlay;
