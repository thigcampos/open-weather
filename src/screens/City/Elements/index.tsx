import { Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { WeatherImage } from "../../../utils";
import { DayProps } from "./elements.types";

export default function Day({ unixTime, temperature, codeImage }: DayProps) {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const date = new Date(unixTime * 1000).getDay();
  const day = weekDays[date];

  return (
    <Layout
      style={{
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
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>{day}</Text>
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
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {Math.ceil(temperature)}
        </Text>
        <WeatherImage code={codeImage} size={1} />
      </View>
    </Layout>
  );
}
