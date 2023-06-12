import { useEffect } from "react"
import { getPokemonDescription, getPokemonDetail } from "../data/pokemon-data"
import { useState } from "react"

export const usePokemonDetail = (number: number) => {

    const [pokemon, setPokemon] = useState<PokemonDetail>()
    const [description, setDescription] = useState<string>()

    useEffect(() => {

        getPokemonDetail(number)
            .then(pokemonDetail => {
                setPokemon(pokemonDetail)
            })

        getPokemonDescription(number)
            .then(description => {
                setDescription(description)
            })

    }, [number])


    return { pokemon, description }

}