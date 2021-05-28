import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export const Loading = () => {
    return (
        <View
                style={styles.spinnercontainer}
            >
                <ActivityIndicator
                    color='grey'
                    size={50}
                />
                <Text>
                    Loading...
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    spinnercontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
