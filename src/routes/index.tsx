import React, { ReactElement, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import type { RootStackParamList } from "./routes.types";
import { CityScreen } from "../screens";
import { Button, Icon } from "@ui-kitten/components";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

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
            shadowColor: "transparent",
            borderColor: "transparent",
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
          headerLeft: () => (
            <Button
              onPress={() => alert("This is a button!")}
              style={{ backgroundColor: "#0f0f0f", borderColor: "transparent" }}
            >
              <Icon
                fill='#fff'
                height='32px'
                width='24px'
                name='arrow-back-outline'
              />
            </Button>
          ),
        }}
      />
    </Navigator>
  );
};
