import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SearchScreen } from "../../screens";
import type { BottomTabNavigatorParamList } from "../routes.types";
import { HomeIcon, SearchIcon } from "../Icons";

const { Navigator, Screen } =
  createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function BottomTabNavigator() {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#202020",
          borderRadius: 15,
          height: 70,
          borderTopColor: "transparent",
          shadowColor: "#000",
          shadowRadius: 10,
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: 10,
          },
        },
      }}
    >
      <Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: SearchIcon,
        }}
      />
    </Navigator>
  );
}
