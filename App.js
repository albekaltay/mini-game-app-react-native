import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView, SafeAreaViewComponent } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from './screens/GameOverScreen'
import Colors from "./constants/colors";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameOver, setgameOver] = useState(true)
  const [countRound, setCountRound] = useState(0)

  const [fontsLoaded] = useFonts({
      'SourceCodePro-Medium': require('./assets/fonts/SourceCodePro-Medium.ttf'),
      'SourceCodePro-Bold' : require('./assets/fonts/SourceCodePro-Bold.ttf')
  })


  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);


    if (fontsLoaded) {
       SplashScreen.hideAsync();
    }



  if(!fontsLoaded) {
    return null
  }

  const pickedNumberHandler = (number) => {
    setPickedNumber(number);
    setgameOver(false)

  };

  const gameOverHandler = () => {
    setgameOver(true)
  }


  const countHandler = () => {
   setCountRound(countRound + 1 )
  }

  const startNewGameHandler = () => {
    setCountRound(0)
    setgameOver(true)
    setPickedNumber(null)

   }
 



  let screen = <StartGameScreen onPickedHandler={pickedNumberHandler}  />;

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} onCount={countHandler} />;
  }

  if(gameOver && pickedNumber) {
    screen = <GameOverScreen userNumber={pickedNumber} countRound={countRound} onStartNewGame={startNewGameHandler}/>
  }


  // if (count === 0 && gameOver===true) {
  //   screen = <StartGameScreen onPickedHandler={pickedNumberHandler}  />
  // }





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
