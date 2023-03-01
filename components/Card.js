import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/colors'


const Card = ({children}) => {
  return (
    <View style={styles.numberInputContainer}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({

    numberInputContainer: {
        alignItems: "center",
        backgroundColor: Colors.primary700,
        marginTop: 36,
        padding: 15,
        borderRadius: 8,
        elevation: 4,
      },

})
