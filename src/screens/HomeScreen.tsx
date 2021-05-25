import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';

export const HomeScreen = (props) => {

    const {top} = useSafeAreaInsets()

    return (
        <View>
            <Text
                style={
                    {
                        ...stylesHome.title,
                        top:top+20,
                        ...styles.globalMargin
                    }}
            >
                Pokedex
            </Text>

        </View>
            
    )
}

const stylesHome= StyleSheet.create({
    title:{
        fontSize:35,
        fontWeight:'bold'
    }
})