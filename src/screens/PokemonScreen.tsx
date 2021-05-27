import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon  from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { RootStackParams } from '../navigator/Navigator';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams , 'PokemonScreen' >  {}
export const PokemonScreen = ( { navigation, route,  }:Props ) => {
    
    const { simplePokemon, color } = route.params

    const {name,id, picture} = simplePokemon

    const {top} = useSafeAreaInsets()

    const {pokemon, isLoading} = usePokemon(id)
    
    return (
        
       <View style={{flex:1}} >
            <View style={{
            ...styles.header,
            backgroundColor:color,
        }} >
                <TouchableOpacity
                    style={{
                        ...styles.backButton,
                        top:top + 10
                    }}
                    onPress={()=> navigation.goBack()}    
                >
                    <Icon
                        name='arrow-back-outline'
                        color='#fff'
                        size={35}
                    />
                </TouchableOpacity>
                <Text 
                    style={{
                        ...styles.name,
                        top:top+40
                    }}
                >
                    {name + '\n' }#{id}
                </Text>
                <Image
                    style={styles.whitePokeBall}
                    source={require('../assets/pokebola-blanca.png')}
                />
                <FadeInImage
                    style={styles.pokemonImage}
                    uri={picture}
                />
            </View>
          {
              isLoading ? (
                <View
                    style={styles.loading}
                > 
                    <ActivityIndicator
                        color={color}
                        size={80}
                    />
                </View>
              ) :(
                  <PokemonDetails pokemon={pokemon} />
              )
          }
       </View>
            
    )
}

const styles = StyleSheet.create({
    header:{
        height:370,
        zIndex:999,
        alignItems:'center',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000

    },
    backButton:{
        position:'absolute',
        left:20,
    },
    name:{
        fontSize:40,
        color:'#fff',
        alignSelf:'flex-start',
        left: 20
    },
    whitePokeBall:{
        height:250,
        width:250,
        bottom:-20,
        opacity:0.8
    },
    pokemonImage:{
        height:200,
        width:200,
        position:'absolute',
        bottom:-15
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})