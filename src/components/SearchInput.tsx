import React, { useState,useEffect } from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncer } from '../hooks/useDebouncer';

interface Props {
    onDebounce : (value : string ) => void
}

export const SearchInput = ( {onDebounce}: Props ) => {
    
    const [searchedValue, setsearchedValue] = useState('')

    const debouncedSearch = useDebouncer(searchedValue)

    useEffect(() => {
        onDebounce(debouncedSearch)
    }, [debouncedSearch])

    return (
        <View style={styles.container} >
            <View
                style={styles.textBg} 
            >
                <TextInput
                    placeholder='Search a pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={searchedValue}
                    onChangeText={setsearchedValue}
                />
                <Icon 
                    name='search-outline'
                    size={20}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    textBg:{
        borderRadius:50,
        backgroundColor:'#f3f1f3',
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textInput:{
        flex:1,
        fontSize:18,
        top:Platform.OS === 'ios' ? 0 : 2
    }

})
