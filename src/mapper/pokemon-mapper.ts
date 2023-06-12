import { PokemonDetailResponse } from "../data/responses/pokemon-detail.response";

export const pokemonMapper = (response: PokemonDetailResponse): PokemonDetail => {

    const pokemonDetail: PokemonDetail = {
        number: response.id,
        name: response.name,
        height: response.height,
        weight: response.weight,
        firstType: response.types[0].type.name,
        secondType: response.types?.[1]?.type?.name,
        spriteFront: response.sprites.front_default,
        spriteBack: response.sprites.back_default,
        imageDefault: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`,
        imageShiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${response.id}.png`,
    }

    return pokemonDetail
}