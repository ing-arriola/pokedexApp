import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

export const HomeScreen = (props) => {
    return (
        <View>
            <Text>
                HomePage
            </Text>
            <Button onPress={()=>{props.navigation.navigate('PokemonScreen')}} title='holas' />
        </View>
            
    )
}

const stylesHome= StyleSheet.create({
    title:{
        fontSize:35,
        fontWeight:'bold'
    }
})