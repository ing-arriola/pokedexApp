import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams , 'PokemonScreen' >  {}
export const PokemonScreen = ( { navigation, route,  }:Props ) => {
    return (
        <View>
            <Text>
                PokemonScreen
            </Text>
        </View>
            
    )
}
