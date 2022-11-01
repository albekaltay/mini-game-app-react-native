import React from 'react'
import { StyleSheet, TextInput,View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style={styles.numberInputContainer}> 
        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
          <View style={styles.buttonGroup}>
        <View style={styles.button}> 
        <PrimaryButton > Reset</PrimaryButton>
        </View>
        <View style={styles.button}> 
        <PrimaryButton > Confirm</PrimaryButton>
        </View>
        </View>

    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    numberInputContainer : {  
        alignItems:"center",
        backgroundColor: "#920034",
        marginTop: 100,
        marginHorizontal: 24,
        padding:15,
        borderRadius: 8,
        elevation:4
        
    },
    numberInput : {

        fontSize:20,
        width:50,
        height:50,
        borderBottomWidth:2,
        borderBottomColor:"yellow",
        color:"yellow",
        marginVertical:10,
        textAlign:"center"
    },
    buttonGroup: {
      
      flexDirection: "row"
    },
    button: {
      flex:1
    }

})