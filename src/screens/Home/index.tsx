import React, { ReactElement, useEffect, useState } from "react";
import { MainCard, MiniCard } from "../../components";
import { SafeAreaView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import type {
  BottomTabNavigatorParamList,
  RootStackParamList,
} from "../../routes/routes.types";
import { Layout } from "@ui-kitten/components";

type HomeScreenProps = StackScreenProps<BottomTabNavigatorParamList, "Home"> &
  StackScreenProps<RootStackParamList>;

export default ({
  navigation: { navigate },
}: HomeScreenProps): ReactElement => {
  const [weather, setWeather] = useState([]);
  const [todayWeather, setTodayWeather] = useState([]);

  const handleGoCity = (): void => {
    navigate("City");
  };

  function getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=-23.1175492&lon=-46.5567066&units=metric&appid=f65d4e5654a911b85dd9ebb23210e18a`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        return setWeather(data.current), setTodayWeather(data.current?.weather[0])
      });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
          padding: 24,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* @ts-ignore */}
        <MainCard onPress={handleGoCity} temperature={weather?.temp} imageCode={todayWeather?.icon}/>
        <MiniCard onPress={getWeather} />
        <MiniCard onPress={handleGoCity} />
      </Layout>
    </SafeAreaView>
  );
};
