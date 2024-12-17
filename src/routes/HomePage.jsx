import { Link } from "react-router-dom"
import Genre from "../components/genre"
import MusicandAuthor from "../components/musicAndauthor"
import Header from "../components/header"
const HomePage = () => {
  return (
    <div>
        <div>
          <Header/>
        </div>
        
          <div>
              <Genre/>
          </div>

            <div>
                <MusicandAuthor/>
            </div>
      
    </div>
  )
}

export default HomePage
