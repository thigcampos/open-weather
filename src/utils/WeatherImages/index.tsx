import { Image } from "react-native";

type Props = {
  code: string;
  size: number;
};

export default function WeatherImage({ code, size }: Props) {
  let link = undefined;
  let height = 50;
  let width = 50;

  switch (code) {
    case "01d":
      height = 50;
      width = 52;
      link = require("../../../assets/01d.png");
      break;
    case "01n":
      height = 50;
      width = 55;
      link = require("../../../assets/01n.png");
      break;
    case "02d":
    case "03d":
    case "04d":
      height = 50;
      width = 60;
      link = require("../../../assets/02d.png");
      break;
    case "02n":
    case "03n":
    case "04n":
      height = 50;
      width = 50;
      link = require("../../../assets/02n.png");
      break;
    case "09d":
    case "10d":
      height = 50;
      width = 53;
      link = require("../../../assets/09d.png");
      break;
    case "09n":
    case "10n":
      height = 50;
      width = 50;
      link = require("../../../assets/09n.png");
      break;
    case "11d":
      height = 50;
      width = 54;
      link = require("../../../assets/11d.png");
      break;
    case "11n":
      height = 50;
      width = 54;
      link = require("../../../assets/11n.png");
      break;
    case "13d":
      height = 50;
      width = 61;
      link = require("../../../assets/13d.png");
      break;
    case "13n":
      height = 50;
      width = 61;
      link = require("../../../assets/13n.png");
      break;
    case "50d":
      height = 50;
      width = 64;
      link = require("../../../assets/50d.png");
      break;
    case "50n":
      height = 50;
      width = 56;
      link = require("../../../assets/50n.png");
      break;
    default:
      height = 50;
      width = 52;
      link = require("../../../assets/01d.png");
      break;
  }

  return (
    <Image
      style={{ width: width * size, height: height * size }}
      source={link}
    />
  );
}
