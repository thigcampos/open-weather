import React from "react";
import { Icon } from "@ui-kitten/components";
import { TabBarIcon } from "../routes.types";

function HomeIcon({ color, size }: TabBarIcon) {
  return <Icon fill={color} width={size} height={size} name='home-outline' />;
}

function SearchIcon({ color, size }: TabBarIcon) {
  return <Icon fill={color} width={size} height={size} name='search-outline' />;
}
function SettingsIcon({ color, size }: TabBarIcon) {
  return (
    <Icon fill={color} width={size} height={size} name='settings-outline' />
  );
}

export { HomeIcon, SearchIcon, SettingsIcon };
