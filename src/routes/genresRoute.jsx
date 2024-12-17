// import React from 'react'
import  { Route,  Routes } from 'react-router-dom'
import GenreDetails from '../components/genreDetails'
//import Genre from '../components/genre'
import PlayMusicPage from '../components/playMusicPage'
import HomePage from './HomePage'

const GenreRoutes = () => {
  return (
    <div>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/artistpage/:id' element={<PlayMusicPage />}/>
                <Route path='/genre/:id' element={<GenreDetails />}/>
                <Route path='/playerPage/:id' element={<PlayMusicPage />}/>

            </Routes>
      
    </div>
  )
}

export default GenreRoutes
