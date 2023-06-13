import { NavLink, useLocation } from "react-router-dom"
import { LogoPokemon } from "./LogoPokemon"
import { MdArrowCircleLeft } from "react-icons/md"

const GoHome = () => {

    const location = useLocation()

    const isDetailsScreen = location.pathname.includes('/pokemon/')


    return isDetailsScreen ? (
        <NavLink to={'/pokedex-react'} >
            <MdArrowCircleLeft size={50} color="#f2de41" />
        </NavLink>
    ) : null
}

export const Header = () => {
    return (
        <header>

            <GoHome />
            <LogoPokemon />
        </header>
    )
}
