import React, { useState, useEffect } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text, Layout, Icon, Spinner } from "@ui-kitten/components";
import styled from "styled-components";
import Day from "./Elements";
import { WeatherImage } from "../../utils";

const MiniTitle = styled(Text)`
  font-size: 10px;
  font-weight: 400;
`;

export default function CityScreen() {
  const [weather, setWeather] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const lat = -23.1175492;
  const lon = -46.5567066;

  useEffect(() => {
    getWeather({ lat, lon });
  }, [lat]);

  type Props = {
    lat: number;
    lon: number;
  };

  function getWeather({ lat, lon }: Props) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&lang=pt_br&appid=fdf57fc960c96d0b71464c49ba39ddbd`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        return setWeather(data), setLoading(false);
      });
  }
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
                code={weather?.current.weather[0].icon}
                size={1.5}
              />
              <Text style={{ fontSize: 64, fontWeight: "bold" }}>
                {Math.ceil(weather?.current?.temp)}
              </Text>
              <Text>{weather?.current.weather[0].description}</Text>
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
                <Text>{Math.ceil(weather?.daily[0].temp.min)}</Text>
                <MiniTitle>Mínima</MiniTitle>
              </View>
              <View style={{ alignItems: "center" }}>
                <Icon
                  fill='#fff'
                  height='24px'
                  width='24px'
                  name='umbrella-outline'
                />
                <Text>{weather?.daily[0].rain}</Text>
                <MiniTitle>Chuva (mm)</MiniTitle>
              </View>
              <View style={{ alignItems: "center" }}>
                <Icon
                  fill='#fff'
                  height='24px'
                  width='24px'
                  name='thermometer-plus-outline'
                />
                <Text>{Math.ceil(weather?.daily[0].temp.max)}</Text>
                <MiniTitle>Máxima</MiniTitle>
              </View>
            </View>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Previsão para os próximos dias
            </Text>
            <Day
              unixTime={weather?.daily[1].dt}
              temperature={weather?.daily[1].temp.day}
              codeImage={weather?.daily[1].weather[0].icon}
            />
            <Day
              unixTime={weather?.daily[2].dt}
              temperature={weather?.daily[2].temp.day}
              codeImage={weather?.daily[2].weather[0].icon}
            />
            <Day
              unixTime={weather?.daily[3].dt}
              temperature={weather?.daily[3].temp.day}
              codeImage={weather?.daily[3].weather[0].icon}
            />
            <Day
              unixTime={weather?.daily[4].dt}
              temperature={weather?.daily[4].temp.day}
              codeImage={weather?.daily[4].weather[0].icon}
            />
            <Day
              unixTime={weather?.daily[5].dt}
              temperature={weather?.daily[5].temp.day}
              codeImage={weather?.daily[5].weather[0].icon}
            />
            <Day
              unixTime={weather?.daily[6].dt}
              temperature={weather?.daily[6].temp.day}
              codeImage={weather?.daily[6].weather[0].icon}
            />
            <Day
              unixTime={weather?.daily[7].dt}
              temperature={weather?.daily[7].temp.day}
              codeImage={weather?.daily[7].weather[0].icon}
            />
          </Layout>
        </ScrollView>
      )}
    </Layout>
  );
}
