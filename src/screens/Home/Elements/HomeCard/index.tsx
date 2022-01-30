import React, { useEffect, useState } from "react";
import { Text } from "@ui-kitten/components";
import { View, TouchableOpacity } from "react-native";
import WeatherImage from "../../../../utils/WeatherImages";
import { WeatherCardProps } from "../../Home.types";
import { getWeather, WeatherData } from "../../../../api";

export default function HomeCard({
  onPress,
  city,
  country,
  lat,
  lon,
}: WeatherCardProps) {
  const [apiData, setApiData] = useState<WeatherData | null>(null);
  useEffect(() => {
    getWeather({ lat, lon }).then(({ data }) => setApiData(data));
  }, []);

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
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
        {city}, {country}
      </Text>
      <View
        style={{
          width: "40%",
          height: "90%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", margin: 0 }}>
          {`${Math.floor(apiData?.current?.temp)}°C`}
        </Text>
        <WeatherImage code={apiData?.current?.weather[0]?.icon} size={0.7} />
      </View>
    </TouchableOpacity>
  );
}
