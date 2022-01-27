import { ViewProps } from "react-native";
import { LayoutProps as LayouPropsKitten } from "@ui-kitten/components";
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  SpaceProps,
} from "styled-system";

export type CustomViewProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayouPropsKitten &
  LayoutProps &
  SpaceProps &
  ViewProps;
