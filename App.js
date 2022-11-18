import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView, SafeAreaViewComponent } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  const pickedNumberHandler = (number) => {
    setPickedNumber(number);
  };

  let screen = <StartGameScreen onPickedHandler={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.secondary500]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
        resizeMode={"cover"}
        source={require("./assets/riho-kroll-m4sGYaHYN5o-unsplash.jpg")}
      >

      <SafeAreaView style={styles.rootScreen}> 
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  imageStyle: {
    opacity: 0.15,
  },
});
