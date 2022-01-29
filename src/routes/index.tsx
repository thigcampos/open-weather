import React, { ReactElement, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import type { RootStackParamList } from "./routes.types";
import { CityScreen, EditFavorites } from "../screens";
import { Button, Icon } from "@ui-kitten/components";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default (): ReactElement => {
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
        options={{
          headerTitle: "Barcelona",
          headerTitleStyle: {
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#0f0f0f",
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              style={{ backgroundColor: "#0f0f0f", borderColor: "transparent" }}
            >
              <Icon
                fill='#fff'
                height='32px'
                width='24px'
                name='heart-outline'
              />
            </Button>
          ),
        }}
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
};
