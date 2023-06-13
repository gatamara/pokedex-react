
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { getFontColor } from "../utils/colores";

interface Props {

    type?: string
    number?: string
}

export const Footer = ({ number, type }: Props) => {
    return (
        <div className='arrow-container'>
            <NavLink to={`/pokedex-react/pokemon/${Number(number) - 1}`} >
                <BsFillCaretLeftFill size={50} color={getFontColor(type)} />
            </NavLink>

            <NavLink to={`/pokedex-react/pokemon/${Number(number) + 1}`} >
                <BsFillCaretRightFill size={50} color={getFontColor(type)} />
            </NavLink>
        </div>
    )
}
