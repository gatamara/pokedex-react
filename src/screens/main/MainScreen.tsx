import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/Card'
import { usePokemonList } from '../../hooks/usePokemonList'
import './MainScreen.css'

export const MainScreen = () => {

    const navigate = useNavigate()

    const { pokemonList } = usePokemonList()

    const handleClick = (number: number) => {
        navigate(`/pokemon/${number}`)
    }

    return (
        <main className="main-container">
            {pokemonList.map(({ number, name }) => (
                <Card key={number} name={name} number={number} onClick={() => handleClick(number)} />
            ))}
        </main>
    )
}
