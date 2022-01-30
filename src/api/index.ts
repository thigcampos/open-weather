import axios from "axios";
import { WEATHER_API_KEY, WEATHER_API_URI } from "@env";

type GetWeatherProps = {
  lat: number;
  lon: number;
};

export type WeatherData = {
  current: {
    weather: Array<{ icon: string; description: string }>;
    temp: number;
  };
  daily: Array<{
    temp: { min: number; max: number; day: number };
    rain: number;
    dt: number;
    weather: Array<{ icon: string }>;
  }>;
};

export type SearchData = {
  name: string;
  state: string | undefined;
  country: string;
  lat: number;
  lon: number;
};

const client = axios.create({
  baseURL: WEATHER_API_URI,
  timeout: 10000,
});

export const getWeather = ({ lat, lon }: GetWeatherProps) =>
  client.get(
    `data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&lang=pt_br&appid=${WEATHER_API_KEY}`
  );

export const searchPlace = (input: string) =>
  client.get(`geo/1.0/direct?q=${input}&limit=2&appid=${WEATHER_API_KEY}`);
