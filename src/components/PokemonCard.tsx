import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokeInterface';


const deviceWidth = Dimensions.get('window').width

interface Props {
    pokemon:SimplePokemon
}

export const PokemonCard = ({pokemon}: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            >
            <View style={stylesCard.cardContainer}>
                <Text style={stylesCard.name} >
                {pokemon.name}
                {'\n#'+ pokemon.id }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const stylesCard = StyleSheet.create({
    cardContainer:{
        marginHorizontal:10,
        backgroundColor:'red',
        height:120,
        width:deviceWidth*0.4,
        marginBottom:25,
        borderRadius:10
    },
    name:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        top:20,
        left:10
    pokeball:{
        height:100,
        width:100,
        position:'absolute',
        bottom:-20,
        right:-20,
        opacity:0.6
    },
    pokemonImage:{
        height:100,
        width:100,
        position:'absolute',
        right:-3,
        bottom:-5
    }
})