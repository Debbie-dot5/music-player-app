import Header from "./components/header"
import MusicandAuthor from "./components/musicAndauthor"
import MusicList from "./components/musicList"


const App = () => {
  return (
<div className=" h-screen w-full  md:max-w-[400px] relative md:m-auto ">
    
  <div className="bg-[url('/first-circle.svg')] bg-no-repeat bg-right-top  w-full h-full ">
  
    <Header />
    
   {/* this is where the other elements will be added  */}

    <div className="bg-[url('/second-circle.svg')] bg-no-repeat bg-cover bg-bottom-left w-full h-screen">
      <MusicList />
      <MusicandAuthor />
    </div> 

  </div>
</div>
  )
}

export default App
