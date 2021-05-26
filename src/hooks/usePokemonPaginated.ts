import { useEffect , useRef, useState } from "react"
import { pokemonApi } from "../api/pokemoApi"
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokeInterface';

export const usePokemonPaginated = () => {
    const [isloading, setisloading] = useState(true)
    const [pokemonList, setpokemonList] = useState<SimplePokemon[]> ([])

    const nextPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')



    const getPokemons = async() => {
        setisloading(true)
        const res = await pokemonApi.get <PokemonPaginatedResponse> (nextPage.current)
        nextPage.current = res.data.next
        mapPokeList(res.data.results)
    }

    const mapPokeList = (pokelist:Result[]) => { 
        const newPokemonList: SimplePokemon[] = pokelist.map( ({ name, url}) => {
            const urlParts = url.split('/')
            const id= urlParts[urlParts.length-2]
            const  picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return{ id, picture,name }
        } )

        setpokemonList([
            ...pokemonList, ...newPokemonList
        ])
        setisloading(false)

    }

    useEffect(() => {
        getPokemons()    
    }, [])

    return{
        isloading,
        pokemonList,
        getPokemons
    }

}

