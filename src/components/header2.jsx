import { Link } from "react-router-dom"

const Header2 = () => {
  return (
    <div>
         <div className="flex justify-between w-full border-red-500">
                  <Link to='/'>
                    <button className="bg-charcoalGray px-2 py-2 rounded-full">
                        <img src="/arrow-left.svg" />
                    </button>
                  </Link>

                    <button className="bg-charcoalGray px-2 py-2 rounded-full">
                        <img src="/menu.svg" />
                    </button>
            </div>

      
    </div>
  )
}

export default Header2
