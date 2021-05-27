import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokeInterface';
import { FadeInImage } from './FadeInImage';


interface Props {
    pokemon:PokemonFull
}

export const PokemonDetails = ( {pokemon} : Props ) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            <View
                style={{
                    ...styles.container,
                    marginTop:340
                }}
            >
                <Text  
                    style={styles.title}
                >
                    Types
                </Text>
                <View style={ { flexDirection:'row' } } >
                    {
                        pokemon.types.map( (poke) => (
                            <Text
                                style={{...styles.regularText}}
                                key={poke.type.name}
                            >
                                {poke.type.name}
                            </Text>
                        ) )
                    }
                </View>
            </View>
            <View
                style={styles.container}
            >
                <Text  
                    style={{
                        ...styles.title,
                    }}
                >
                    Weight
                </Text>
                <Text style={styles.regularText} >{pokemon.weight} kg</Text>
            </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:20
    },
    regularText:{
        fontSize:17,
        marginRight:10
    },
}
)
