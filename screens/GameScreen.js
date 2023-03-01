import React, { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import TextInstructure from "../components/TextInstructure";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};
let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({ userNumber, onGameOver,onCount}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedNumbersList, setGuessedNumbersList] = useState([])

  const nextGuessHandler = (direction, ) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      onCount();
      return;
 
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    onCount();
    setGuessedNumbersList(numbers => [...numbers, newRandomNumber])
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();

    }
  }, [onGameOver, currentGuess, userNumber]);


  useEffect(() => {
     minBoundry = 1;
     maxBoundry = 100;
  }, [])
  



  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <TextInstructure style={{ marginBottom: 14 }}>
          {" "}
          Higher or lower?{" "}
        </TextInstructure>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>

            
        
        </View>
             
   
      </Card>

      <FlatList
        data={guessedNumbersList}
        renderItem={ ({item,index}) => 
        <View style={{borderWidth:2, borderColor:Colors.primary800,borderRadius:40, marginVertical:10, backgroundColor:Colors.secondary500, color:Colors.primary800,
        paddingVertical:10,paddingHorizontal:15,marginHorizontal:10, flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontFamily:'SourceCodePro-Bold', fontSize:16, color:Colors.primary800}}> #{index + 1}</Text>
        <Text style={{fontFamily:'SourceCodePro-Bold', fontSize:16, color:Colors.primary800}}> {"Opponent's Guess: " + item}</Text>
         </View>}
        keyExtractor={ item => item}
      />

    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
