import React from 'react'
import  { Route, Router, Routes } from 'react-router-dom'
import GenreDetails from '../components/genreDetails'
import Genre from '../components/genre'

const GenreRoutes = () => {
  return (
    <div>
       <Router>
            <Routes>
                <Route path='/' element={<Genre />}/>
                <Route path='/genre/:id' element={<GenreDetails />}/>
            </Routes>
       </Router>
      
    </div>
  )
}

export default GenreRoutes
