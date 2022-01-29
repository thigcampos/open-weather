import {
  BottomTabNavigatorParamList,
  RootStackParamList,
} from "../../routes/routes.types";
import { StackScreenProps } from "@react-navigation/stack";

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
};
