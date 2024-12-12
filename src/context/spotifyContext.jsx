import React, { createContext, useEffect,  useState } from "react";


export const SpotifyContext = createContext();

export const SpotifyProvider = ({ children  }) => {

    const [songs, setSongs] = useState([]);
   



    useEffect(() => {

        const fetchedSongs = async () => {
            const options = {
                method: 'GET',
                headers: {
                  'x-rapidapi-key': '5d2c3d9542mshac7a9dfd7c6d9dap1dffdcjsn5318b703922f',
                  'x-rapidapi-host': 'spotify23.p.rapidapi.com'
                }
              };

            try{
                const response = await fetch(
                   'https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20', options

                  );


                  const data = await response.json();
                  console.log("API Response:",data.content.items.flatMap);
                  console.log("acessinng the data", data.content.items)


                 
                  const formattedSongs = data.content.items.flatMap((item) => {

        
                    if (item.content && Array.isArray(item.content.items)){

                        return item.content.items.map((playlist) => ({
                            id: playlist.id,
                            name: playlist.name,
                            description: playlist.description || "No description available",
                            image: playlist.images?.[0]?.url || "/default-image.svg", 
                            totalTracks: playlist.tracks?.total || 0,
                            playlistUrl: playlist.external_urls?.spotify || "#",

                            // artistLists: playlist.content.items.map((item) => ({
                            //     img: item.images?.[0]?.url || "/default-artist.svg",
                            //     songTitle: item.name,
                            //     artist: item.owner?.display_name || "Unknown Artist",
                            //   })),
                              

                            }));
                            
                    }
                    return [];
                  });

                  

                  setSongs(formattedSongs);
                  console.log(formattedSongs);
                  
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        }

        fetchedSongs();
    }, [])

   




    return (
        <SpotifyContext.Provider value={{ songs}}>
            {children}

          
        </SpotifyContext.Provider>
    )

}