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

    return (
        <View>
            <Text>
                PokemonScreen
            </Text>
        </View>
            
    )
}
