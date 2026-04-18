
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"

/* Page */
import Home from "../Page/Home"
import { RegisterForm } from "../futures/Register/RegisterFjrm"
import { LoginForm } from "../futures/Login/LoginForm"

/* Widgets */
import Header from "../Widgets/Header"

export default function AppRouter(){

    const router = [
        {name: Home , path: "/"},
        {name: LoginForm, path: "/login"},
        {name: RegisterForm , path: "/register"}
    ]

    return(
        <Router>
            <Header/>
            
            <Routes>
            {router.map((p) => (
                <Route path = {p.path} element = {<p.name/>} />
            ))}
            </Routes>
        </Router>
    )
}