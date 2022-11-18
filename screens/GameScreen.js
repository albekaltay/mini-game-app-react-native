import React,{useState} from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Title from '../components/Title'



const generateRandomBetween = (min, max, exclude) => {

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        generateRandomBetween(min, max, exclude);
    }else {
        return randomNumber;
    }

}

const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomBetween(1,100,userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)




  return (

    <View style={styles.container}> 
    <Title>Opponent's Guess</Title>
    <NumberContainer>{currentGuess}</NumberContainer>
    
    </View>
  )
}


export default GameScreen

const styles = StyleSheet.create({
    container : {
            paddingVertical:36,
            paddingHorizontal:12
    }
    
})