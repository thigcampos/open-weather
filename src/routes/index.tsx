import React, { ReactElement, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import type { RootStackParamList } from "./routes.types";
import { CityScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default (): ReactElement => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='BottomTabNavigator' component={BottomTabNavigator} />
      <Screen name='City' component={CityScreen} />
    </Navigator>
  );
};
