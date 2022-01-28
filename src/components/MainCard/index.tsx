import React, { ReactElement } from "react";
import { Text } from "@ui-kitten/components";
import { View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CardProps } from "../components.types";
import { WeatherImage } from "../../utils";

const MiniTitle = styled(Text)`
  font-size: 10px;
  font-weight: 400;
`;

const MiniImage = styled(Image)`
  width: 50px;
  height: 44px;
`;



export default ({ onPress, temperature, imageCode }: CardProps): ReactElement => {
  return (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
    style={{
      padding: 16,
      width: "100%",
      display: "flex",
      borderRadius: 14,
      height: 240,
      justifyContent: "space-between",
      backgroundColor: "#202020",
    }}
  >
    <View style={{ width: "100%", height: "10%" }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Atibaia</Text>
    </View>
    <View
      style={{
        width: "100%",
        height: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 64, fontWeight: "bold" }}>
        {Math.ceil(temperature)}
      </Text>
      <WeatherImage code={imageCode} size={2}/>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <MiniTitle>Tomorrow</MiniTitle>
          <WeatherImage code={imageCode} size={1}/>
      </View>
      <View style={{ alignItems: "center" }}>
        <MiniTitle>Monday</MiniTitle>
          <WeatherImage code={imageCode} size={1}/>
      </View>
      <View style={{ alignItems: "center" }}>
        <MiniTitle>Tuesday</MiniTitle>
          <WeatherImage code={imageCode} size={1}/>
      </View>
    </View>
  </TouchableOpacity>
)
    }