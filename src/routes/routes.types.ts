import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Search: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  City: undefined;
  EditFavorites: undefined;
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParamList>;
};

export type TabBarIcon = {
  color: string;
  size: number;
};
