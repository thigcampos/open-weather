import {
  HomeScreen,
  SearchScreen,
  SettingsScreen,
} from "../../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { BottomTabNavigatorParamList, TabBarIcon } from "../routes.types";
import { HomeIcon, SearchIcon, SettingsIcon } from "../Icons";
import { Button, Icon } from "@ui-kitten/components";

const { Navigator, Screen } =
  createBottomTabNavigator<BottomTabNavigatorParamList>();

export default () => (
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
          headerTitle: "ScopoWeather",
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
                name='edit-outline'
              />
            </Button>
          ),
          tabBarIcon: ({ color, size }: TabBarIcon) => (
            <HomeIcon fill={color} width={size} height={size} />
          ),
        }}
      />
      <Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerTitle: "Buscar",
          headerTitleStyle: {
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#0f0f0f",
            shadowColor: "transparent",
            borderColor: "transparent",
          },
          tabBarIcon: ({ color, size }: TabBarIcon) => (
            <SearchIcon fill={color} width={size} height={size} />
          ),
        }}
      />
      <Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          headerTitle: "Configuracoes",
          headerTitleStyle: {
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#0f0f0f",
            shadowColor: "transparent",
            borderColor: "transparent",
          },
          tabBarIcon: ({ color, size }: TabBarIcon) => (
            <SettingsIcon fill={color} width={size} height={size} />
          ),
        }}
      />
    </Navigator>
  )
