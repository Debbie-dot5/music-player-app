import {useEffect, useState} from 'react'

const Fetched = () => {

    const [music, setMusic] = useState([])

    const getMusic = async () => {
        const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5d2c3d9542mshac7a9dfd7c6d9dap1dffdcjsn5318b703922f',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setMusic(result);
} catch (error) {
	console.error(error);
}
    }

    useEffect(() => {
        getMusic()
    }, [])
  return (
    <div>
      Fetched data

      {music?.user?.items?.map(musicdata, index) => {
        return (

            
        )
        
        
    
      }}
    </div>
  )
}

export default Fetched
