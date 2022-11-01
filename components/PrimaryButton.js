import React  from 'react'
import { View,Text, Pressable, StyleSheet} from 'react-native'

const PrimaryButton = ({children}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable  style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} android_ripple={{ color: "#100005"}}> 
        <Text style={styles.buttonText}> {children} </Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer : {
    margin:4,
    overflow:'hidden',
    borderRadius:24,


  },
  buttonInnerContainer : {
      backgroundColor:"#28000e",
      alignItems:'center' ,
      paddingVertical:10

      },
  buttonText : {
    color: "white",
    fontWeight:'bold'
 

  },
  // For ios ripple
  pressed: {
    opacity: 0.75
  }

})