import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors'

const Title = ({children}) => {
  return (
   
    <Text style={styles.title}>{children}</Text>

  )
}

export default Title

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontFamily: 'SourceCodePro-Bold',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding:5,
        textAlign:'center',
        marginBottom:20
    },
  

})