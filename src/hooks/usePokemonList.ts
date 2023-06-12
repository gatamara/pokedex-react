import { useEffect, useState } from "react"
import { getPokemonList } from "../data/pokemon-data"
import { Pokemon } from "../entities/pokemon"

export const usePokemonList = () => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
        getPokemonList()
            .then(pokemones => {
                setPokemonList(pokemones)
            })
    }, [])


    return {
        pokemonList
    }

}