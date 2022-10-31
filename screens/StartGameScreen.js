import React from 'react'
import { StyleSheet, TextInput,View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style={styles.textInputContainer}> 
        <TextInput style={styles.numberInput} maxLength={2}/>

        <PrimaryButton > Reset</PrimaryButton>
        <PrimaryButton > Confirm</PrimaryButton>

    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    textInputContainer : {  
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
    }

})