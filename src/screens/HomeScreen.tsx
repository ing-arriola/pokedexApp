import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const HomeScreen = (props) => {

    const {top} = useSafeAreaInsets()

    return (
        <View>
            <Image 
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
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