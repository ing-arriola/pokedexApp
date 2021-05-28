import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet, Platform, ActivityIndicator,FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokeInterface';

export const SearchScreen = () => {

    const {top} = useSafeAreaInsets()
    const {isFetching, pokemonList} = usePokemonSearch()
    const [searchTerm, setsearchTerm] = useState('')
    const [filtedPokemons, setfiltedPokemons] = useState <SimplePokemon[]> ([])
    useEffect(() => {

        if(searchTerm.length === 0){
            return setfiltedPokemons([])
        }

        if(isNaN( Number(searchTerm) )){
            setfiltedPokemons( pokemonList.filter( 
                poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase())) )
        }else{
            const resultSearch=pokemonList.find(poke => poke.id === searchTerm)
            setfiltedPokemons(resultSearch ? [resultSearch] : [])
        }

    }, [searchTerm])

    if(isFetching){
        return (
            <Loading/>
        )
    }

    console.log(filtedPokemons)

    return (
        <View
            style={
                {...searchStyles.container,
                 top:Platform.OS === 'android' ? top+10 : top
                }
            }
        >
            <SearchInput 
                onDebounce = {(result)=> setsearchTerm(result) }
            />
            <FlatList 
                    data = { filtedPokemons } 
                    ListHeaderComponent={(
                    <Text
                        style={
                            {
                                ...searchStyles.title,
                                top:top+10,
                                ...styles.globalMargin
                            }}
                    >
                        {searchTerm}
                    </Text>)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor = {(pokemon) => pokemon.id}
                    renderItem = { ({item}) => (<PokemonCard pokemon={item} />) } 
                    
                />
        </View>
    )
}

const searchStyles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        marginBottom:10
    }
})
