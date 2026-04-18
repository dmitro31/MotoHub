
import { Link } from "react-router-dom"
import Massage from "./Message"
import { useAuth } from "../../context/Auth.context"
import LikeIcon from "./LikeIcon"




export default function NavBar() {
  const { isAuth } = useAuth()

  return (
    <header className="h-16 px-6 bg-white border-b border-gray-100 flex items-center justify-between gap-4">
      <nav className="flex items-center gap-1">
        {isAuth ? (
          <>
            <Link to="/favorites" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <LikeIcon  />
            </Link>
            <Link to="/messages" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <Massage />
            </Link>
            <div className="w-px h-5 bg-gray-100 mx-1" />
            <Link to="/profile" className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 text-sm font-medium flex items-center justify-center">
              Профіль
            </Link>
             <Link to="/add-car" className="h-9 px-4 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center ml-10">
              Продати авто
            </Link>
          </>
        ) : (
          <>
            <Link to="/add-car" className="h-9 px-4 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center">
              Продати авто
            </Link>
            <div className="w-px h-5 bg-gray-100 mx-1" />
            <Link to="/login" className="h-9 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center">
              Увійти
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}