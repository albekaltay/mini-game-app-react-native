import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'

const NumberContainer = ({children}) => {
  return (

        <Text style={styles.container}>{children}</Text>
    )
}

export default NumberContainer



const styles = StyleSheet.create({
    container : {
        
        padding:10,
        color: Colors.secondary500,
        fontSize:24,
        borderColor:Colors.secondary500,
        borderWidth:2,
        borderRadius:8,
        textAlign:'center',
        margin:15,
        marginTop:20
    }
    
})