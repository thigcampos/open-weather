import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text, Layout, Icon, Spinner } from "@ui-kitten/components";
import styled from "styled-components";
import { StackScreenProps } from "@react-navigation/stack";
import { Day } from "./Elements";
import WeatherImage from "../../utils/WeatherImages";
import { RootStackParamList } from "../../routes/routes.types";
import { getWeather, WeatherData } from "../../api";

const MiniTitle = styled(Text)`
  font-size: 10px;
  font-weight: 400;
`;

export default function CityScreen({
  route: {
    params: { lat, lon },
  },
}: StackScreenProps<RootStackParamList, "City">) {
  const [apiData, setApiData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeather = () => {
      getWeather({ lat, lon }).then(({ data }) => {
        setApiData(data);
        setLoading(false);
      });
    };

    loadWeather();
  }, [lat]);

  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {loading ? (
        <Spinner size='large' />
      ) : (
        <ScrollView contentContainerStyle={{ maxWidth: "100%" }}>
          <Layout
            style={{
              flex: 1,
              padding: 24,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <WeatherImage
                code={apiData!.current.weather[0].icon}
                size={1.5}
              />
              <Text style={{ fontSize: 64, fontWeight: "bold" }}>
                {`${Math.ceil(apiData!.current.temp)}°C`}
              </Text>
              <Text>{apiData!.current.weather[0].description}</Text>
            </View>
            <View
              style={{
                display: "flex",
                marginTop: 40,
                marginBottom: 40,
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Icon
                  fill='#fff'
                  height='24px'
                  width='24px'
                  name='thermometer-minus-outline'
                />
                <Text>{Math.ceil(apiData!.daily[0].temp.min)}</Text>
                <MiniTitle>mínima</MiniTitle>
              </View>
              <View style={{ alignItems: "center" }}>
                <Icon
                  fill='#fff'
                  height='24px'
                  width='24px'
                  name='umbrella-outline'
                />
                <Text>{apiData!.daily[0].rain || 0}</Text>
                <MiniTitle>chuva (mm)</MiniTitle>
              </View>
              <View style={{ alignItems: "center" }}>
                <Icon
                  fill='#fff'
                  height='24px'
                  width='24px'
                  name='thermometer-plus-outline'
                />
                <Text>{Math.ceil(apiData!.daily[0].temp.max)}</Text>
                <MiniTitle>máxima</MiniTitle>
              </View>
            </View>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Previsão para os próximos dias
            </Text>
            <Day
              unixTime={apiData!.daily[1].dt}
              temperature={apiData!.daily[1].temp.day}
              codeImage={apiData!.daily[1].weather[0].icon}
            />
            <Day
              unixTime={apiData!.daily[2].dt}
              temperature={apiData!.daily[2].temp.day}
              codeImage={apiData!.daily[2].weather[0].icon}
            />
            <Day
              unixTime={apiData!.daily[3].dt}
              temperature={apiData!.daily[3].temp.day}
              codeImage={apiData!.daily[3].weather[0].icon}
            />
            <Day
              unixTime={apiData!.daily[4].dt}
              temperature={apiData!.daily[4].temp.day}
              codeImage={apiData!.daily[4].weather[0].icon}
            />
            <Day
              unixTime={apiData!.daily[5].dt}
              temperature={apiData!.daily[5].temp.day}
              codeImage={apiData!.daily[5].weather[0].icon}
            />
            <Day
              unixTime={apiData!.daily[6].dt}
              temperature={apiData!.daily[6].temp.day}
              codeImage={apiData!.daily[6].weather[0].icon}
            />
            <Day
              unixTime={apiData!.daily[7].dt}
              temperature={apiData!.daily[7].temp.day}
              codeImage={apiData!.daily[7].weather[0].icon}
            />
          </Layout>
        </ScrollView>
      )}
    </Layout>
  );
}
