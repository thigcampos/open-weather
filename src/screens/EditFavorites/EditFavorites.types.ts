export type CityCardProps = {
  onPress: () => void;
  city: string;
  country: string;
  state: string | undefined;
  lat: number;
  lon: number;
};
