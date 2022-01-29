import { StackScreenProps } from "@react-navigation/stack";
import type {
  BottomTabNavigatorParamList,
  RootStackParamList,
} from "../../routes/routes.types";

export type HomeScreenProps = StackScreenProps<
  BottomTabNavigatorParamList,
  "Home"
> &
  StackScreenProps<RootStackParamList>;

export type WeatherCardProps = {
  onPress: () => void;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
};
