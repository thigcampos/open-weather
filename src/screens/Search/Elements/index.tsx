import React, { ReactElement } from "react";
import { ResultCardProps } from "../Search.types";
import { Text, Icon, Button, Layout } from "@ui-kitten/components";
import { TouchableOpacity, View } from "react-native";

export default function ResultCard({
  onPress,
  city,
  state,
  country,
}: ResultCardProps): ReactElement {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        padding: 16,
        minWidth: "100%",
        display: "flex",
        flexDirection: "row",
        height: 75,
        marginTop: 12,
        borderRadius: 14,
        alignItems: "center",
        backgroundColor: "#202020",
        justifyContent: "space-between",
      }}
    >
      {state === undefined ? (
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          {city}, {country}
        </Text>
      ) : (
        <View
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {city}, {country}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>
            {state}
          </Text>
        </View>
      )}
      <Button appearance={"ghost"}>
        <Icon name='heart-outline' height={24} width={24} fill={"white"} />
      </Button>
    </TouchableOpacity>
  );
}
