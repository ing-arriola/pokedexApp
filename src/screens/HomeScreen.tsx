import React from 'react'
import { FlatList, Text ,Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = (props) => {

    const {top} = useSafeAreaInsets()

    const {pokemonList,getPokemons} = usePokemonPaginated()

    return (
        <>
            <Image 
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <FlatList 
                data = { pokemonList } 
                ListHeaderComponent={(
                <Text
                    style={
                        {
                            ...stylesHome.title,
                            top:top+20,
                            ...styles.globalMargin
                        }}
                >
                    Pokedex
                </Text>)}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor = {(pokemon) => pokemon.id}
                renderItem = { ({item}) => (<PokemonCard pokemon={item} />) } 
                //infinite scroll
                onEndReached={getPokemons}
                onEndReachedThreshold={0.4}
                ListFooterComponent={(
                    <ActivityIndicator 
                        style={{height:25}}
                        size={25}
                        color='grey'
                    />
                )}
            />

        </>
            
    )
}

const stylesHome= StyleSheet.create({
    title:{
        fontSize:35,
        fontWeight:'bold',
        marginBottom:20
    }
})