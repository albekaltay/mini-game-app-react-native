import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import Colors from '../constants/colors'

const GameOverScreen = ({userNumber, countRound , onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
    <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}> 
          <Image style={styles.image}  source={require('../assets/success.png')}/>
        </View>
      <Text style={styles.text}> Your phone needed <Text style={styles.highlight}>{countRound}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  imageContainer: {
    height: 250,
    width:250,
    overflow: 'hidden',
    borderWidth:3,
    borderColor: Colors.primary800,
    borderRadius:200,
    marginBottom:20
    
  },
  image: {
    height: '100%',
    width: '100%'
  },
  text: {
    fontFamily: 'SourceCodePro-Bold',
    fontSize:20,
    textAlign:'center',
    paddingHorizontal:22,
    marginBottom:20
  },
  highlight: {

    color:Colors.primary500
  }
})