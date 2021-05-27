import { useState, useEffect } from "react"
import { PokemonFull } from '../interfaces/pokeInterface';
import { pokemonApi } from '../api/pokemoApi';

export const usePokemon = (id : string) => {
    const [isLoading, setisLoading] = useState(true)
    const [pokemon, setpokemon] = useState <PokemonFull> ( {} as PokemonFull)


    const getPokemon = async() => {
        const res = await pokemonApi.get <PokemonFull> (`https://pokeapi.co/api/v2/pokemon/${id}`)
        setpokemon(res.data)
        setisLoading(false)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return{
        isLoading,
        pokemon
    }
}
