
import { MdChevronLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { getFontColor } from "../utils/colores";
interface Props {

    type?: string
    number?: string
}


export const ArrowNavLeft = ({ number, type }: Props) => {
    return (
        <NavLink to={`/pokedex-react/pokemon/${Number(number) - 1}`} >
            <MdChevronLeft size={150} color={getFontColor(type)} />
        </NavLink>
    )
}
