import React from 'react'
import {View, Text, Button} from 'react-native'

export const HomeScreen = (props) => {
    return (
        <View>
            <Text>
                HomePage
            </Text>
            <Button onPress={()=>{props.navigation.navigate('PokemonScreen')}} title='pedo' />
        </View>
            
    )
}
