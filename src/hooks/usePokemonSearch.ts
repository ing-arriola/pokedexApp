import { useEffect , useRef, useState } from "react"
import { pokemonApi } from "../api/pokemoApi"
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokeInterface';

export const usePokemonSearch = () => {
    const [isFetching, setisFetching] = useState(true)
    const [pokemonList, setpokemonList] = useState<SimplePokemon[]> ([])

    
    const getPokemons = async() => {
        const res = await pokemonApi.get <PokemonPaginatedResponse> ('https://pokeapi.co/api/v2/pokemon?limit=1200')
        
        mapPokeList(res.data.results)
    }


    const mapPokeList = (pokelist:Result[]) => { 
        const newPokemonList: SimplePokemon[] = pokelist.map( ({ name, url}) => {
            const urlParts = url.split('/')
            const id= urlParts[urlParts.length-2]
            const  picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            return{ id, picture,name }
        } )

        setpokemonList(newPokemonList)
        setisFetching(false)
       

    }

    useEffect(() => {
        getPokemons()    
    }, [])

    return{
        isFetching,
        pokemonList
    }

}

