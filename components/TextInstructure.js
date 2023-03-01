import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'


const TextInstructure = ({children, style}) => {
  return (
    <Text style={[styles.instructureText, style]}>{children}</Text>
  )
}

export default TextInstructure

const styles = StyleSheet.create({

    instructureText: {
      fontFamily: 'SourceCodePro-Medium',
      fontSize: 20,
      color: Colors.secondary500,
    },

})
    