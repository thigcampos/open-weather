import React, { ReactElement } from "react";
import { Icon, Text } from "@ui-kitten/components";
import { View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";

const MiniTitle = styled(Text)`
  font-size: 10px;
  font-weight: 400;
`;

const MiniImage = styled(Image)`
  width: 50px;
  height: 44px;
`;

type Props = {
  onPress: () => void;
};


export default ({ onPress }: Props): ReactElement => (
    <TouchableOpacity
    onPress={onPress}
      style={{
        top: 24,
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
        <Text style={{ fontSize: 64, fontWeight: "bold" }}>25</Text>
        <Image
          style={{ width: 125, height: 95 }}
          source={require("../../../assets/cloudly.png")}
        />
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
          <MiniImage source={require("../../../assets/cloudly.png")} />
        </View>
        <View style={{ alignItems: "center" }}>
          <MiniTitle>Monday</MiniTitle>
          <MiniImage source={require("../../../assets/rainy.png")} />
        </View>
        <View style={{ alignItems: "center" }}>
          <MiniTitle>Tuesday</MiniTitle>
          <MiniImage source={require("../../../assets/sunny.png")} />
        </View>
      </View>
    </TouchableOpacity>
  );
