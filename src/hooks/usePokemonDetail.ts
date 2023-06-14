import { useEffect } from "react"
import { getPokemonDescription, getPokemonDetail } from "../data/pokemon-data"
import { useState } from "react"

export const usePokemonDetail = (number: number) => {

    const [pokemon, setPokemon] = useState<PokemonDetail>()
    const [description, setDescription] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {

        getPokemonDetail(number)
            .then(pokemonDetail => {
                setPokemon(pokemonDetail)
                setIsLoading(false)
            })

        getPokemonDescription(number)
            .then(description => {
                setDescription(description)
            })

    }, [number])




    return { isLoading, pokemon, description }

}