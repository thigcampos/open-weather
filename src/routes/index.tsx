/* eslint-disable react/no-unstable-nested-components */
import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import type { RootStackParamList } from "./routes.types";
import { CityScreen, EditFavorites } from "../screens";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default function RootStack(): ReactElement {
  return (
    <Navigator>
      <Screen
        name='BottomTabNavigator'
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name='City'
        component={CityScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Screen
        name='EditFavorites'
        component={EditFavorites}
        options={{
          headerTitle: "Cidades",
          headerTitleStyle: {
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#0f0f0f",
          },
        }}
      />
    </Navigator>
  );
}
