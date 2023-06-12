// se conecta con el backend para obtener los datos, si hay algun error comunicandose con el servidor

import { Pokemon } from "../entities/pokemon";
import { pokemonMapper } from "../mapper/pokemon-mapper";
import { PokemonDetailResponse } from "./responses/pokemon-detail.response";
import { PokemonListResponse } from "./responses/pokemon-list.response";

// se debe procesar aqui y devovler un mensaje
export const getPokemonList = async (): Promise<Pokemon[]> => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=251&offset=0`);
    const { results }: PokemonListResponse = await res.json();

    const pokemones: Pokemon[] = results.map((datos) => ({
        name: datos.name,
        detailUrl: datos.url,
        number: Number(datos.url.match(/\/(\d+)\/$/)?.[1] || 1),
    }));

    return pokemones;
}

export const getPokemonDetail = async (number: number): Promise<PokemonDetail> => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)

    const data: PokemonDetailResponse = await res.json();

    const pokemonDetail = pokemonMapper(data)

    return pokemonDetail
}

export const getPokemonDescription = async (number: number) => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}`)
    const data = await res.json()

    const texto = data.flavor_text_entries;
    const descripcion = texto.find(function (element: any) {
        return element.language.name === "es";
    });

    return descripcion.flavor_text
}