import React, { ReactElement } from "react";
import { Text } from "@ui-kitten/components";
import { View, Image, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

export default ({ onPress }: Props): ReactElement => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={onPress}
    style={{
      top: 24,
      padding: 16,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      borderRadius: 14,
      height: 75,
      marginTop: 12,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#202020",
    }}
  >
    <Text style={{ fontSize: 14, fontWeight: "bold" }}>Franco da Rocha</Text>
    <View
      style={{
        width: "40%",
        height: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>90</Text>
      <Image
        style={{ width: 55, height: 50 }}
        source={require("../../../assets/sunny.png")}
      />
    </View>
  </TouchableOpacity>
);
