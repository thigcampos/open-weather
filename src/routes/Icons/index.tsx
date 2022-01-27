import React, { ReactElement } from "react";
import { Icon } from "@ui-kitten/components";

type IconProps = {
  fill: string;
  width: number;
  height: number;
};

const HomeIcon = (props: IconProps): ReactElement => (
  <Icon {...props} name='home-outline' />
);

const SearchIcon = (props: IconProps): ReactElement => (
  <Icon {...props} name='search-outline' />
);

const SettingsIcon = (props: IconProps): ReactElement => (
  <Icon {...props} name='settings-outline' />
);

export { HomeIcon, SearchIcon, SettingsIcon };
