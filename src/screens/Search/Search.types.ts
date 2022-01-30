import { StackScreenProps } from "@react-navigation/stack";
import {
  BottomTabNavigatorParamList,
  RootStackParamList,
} from "../../routes/routes.types";

export type SearchScreenProps = StackScreenProps<
  BottomTabNavigatorParamList,
  "Search"
> &
  StackScreenProps<RootStackParamList>;

export type ResultCardProps = {
  onPress: () => void;
  city: string;
  country: string;
  state: string | undefined;
  lat: number;
  lon: number;
};
