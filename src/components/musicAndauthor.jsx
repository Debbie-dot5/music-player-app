
// when text is hovered increase font size and add a line under the text on hover 
//

const artistLists = [
    {
        img: '/artist1.svg',
        songTitle: "BORN TO DIE",
        artist: "Lana Del Rey",
      },
      {
        img: '/artist2.svg',
        songTitle: "JOLENE",
        artist: "Dolly Parton",
      },
      {
        img: '/artist3.svg',
        songTitle: "WRECKING BALL",
        artist: "Miley Cyrus",
      },
      {
        img: '/artist4.svg',
        songTitle: "BUTTER",
        artist: "BTS",
      },
      {
        img: '/artist5.svg',
        songTitle: "BABY",
        artist: "Justin Bieber",
      },
  ]


const MusicandAuthor = () => {
  return (
    <div className="px-6 pt-4 w-full relative">
       <div className="flex gap-2 overflow-x-scroll no-scrollbar w-full text-end">
            <h3 className="text-white text-[16px] flex-shrink-0 w-[130px]">Recommendation</h3>
            <h3 className="text-gray-300 flex-shrink-0 w-[100px]">popular</h3>
            <h3 className="text-gray-300 flex-shrink-0 w-[100px]">New Music</h3>
       </div>

      <div className="pt-6">
        {artistLists.map((artistList, index) => (
            <div key={index} className="flex justify-between items-center ">
                <div className="flex gap-6">
                   <img className="pb-4" src={artistList.img}/>
                    <div className="pt-2">
                        <h2 className="text-lg font-semibold text-white">{artistList.songTitle}</h2>
                        <p  className="text-sm text-gray-300">{artistList.artist}</p>
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
  )
}

export default MusicandAuthor
