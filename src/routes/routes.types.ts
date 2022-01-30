import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Search: undefined;
};

export type RootStackParamList = {
  City: {
    name: string;
    lat: number;
    lon: number;
  };
  EditFavorites: undefined;
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParamList>;
};

export type TabBarIcon = {
  color: string;
  size: number;
};
