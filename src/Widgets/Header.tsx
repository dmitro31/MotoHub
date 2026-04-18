import Catalog from "../futures/Header/Catalog";
import Logo from "../futures/Header/Logo";
import NavBar from "../futures/Header/NavBar";
import Search from "../futures/Header/Search";


export default function Header(){

    return(
        <div className=' container flex gap-4 mt-5 px-10 items-center  '>
            <Logo/>
            <Catalog/>
            <Search/>
            <NavBar/>
        </div>
    )
}