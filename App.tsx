/* eslint-disable react/style-prop-object */
import React from "react";
import * as eva from "@eva-design/eva";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainNavigator from "./src/routes";
import colors from "./src/constants/colors.json";
import { store, persistor } from "./src/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...colors }}>
          <NavigationContainer theme={DarkTheme}>
            <MainNavigator />
            <StatusBar style='light' />
          </NavigationContainer>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
