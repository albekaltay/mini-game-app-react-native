import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import TextInstructure from "../components/TextInstructure";
import Title from "../components/Title";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickedHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmButtonHandler = () => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid numnber!",
        "Number should be beetwen 0 - 100 range of numbers. (Not included 0 and 100.)",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickedHandler(choosenNumber);

  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <TextInstructure> Enter a number</TextInstructure>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}> Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmButtonHandler}>
              {" "}
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
  },
  numberInput: {
    fontSize: 20,
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: Colors.secondary500,
    color: Colors.secondary500,
    marginVertical: 10,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
