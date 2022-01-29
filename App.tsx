// In App.js in a new project

import * as React from "react";
import * as eva from "@eva-design/eva";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/routes";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StatusBar } from "expo-status-bar";
import { default as colors } from "./src/constants/Colors.json";

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...colors }}>
        <NavigationContainer theme={DarkTheme}>
          <MainNavigator />
          <StatusBar style='light' />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

export default App;
