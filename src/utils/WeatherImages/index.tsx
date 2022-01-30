import { Image } from "react-native";
import { WeatherImagesProps } from "./WeatherImages.types";
import Image01d from "../../../assets/01d.png";
import Image01n from "../../../assets/01n.png";
import Image02d from "../../../assets/02d.png";
import Image02n from "../../../assets/02n.png";
import Image09d from "../../../assets/09d.png";
import Image09n from "../../../assets/09n.png";
import Image11d from "../../../assets/11d.png";
import Image11n from "../../../assets/11n.png";
import Image13d from "../../../assets/13d.png";
import Image13n from "../../../assets/13n.png";
import Image50d from "../../../assets/50d.png";
import Image50n from "../../../assets/50n.png";

export default function WeatherImage({ code, size }: WeatherImagesProps) {
  let link;
  let height = 50;
  let width = 50;

  switch (code) {
    case "01d":
      height = 50;
      width = 52;
      link = Image01d;
      break;
    case "01n":
      height = 50;
      width = 55;
      link = Image01n;
      break;
    case "02d":
    case "03d":
    case "04d":
      height = 50;
      width = 60;
      link = Image02d;
      break;
    case "02n":
    case "03n":
    case "04n":
      height = 50;
      width = 50;
      link = Image02n;
      break;
    case "09d":
    case "10d":
      height = 50;
      width = 53;
      link = Image09d;
      break;
    case "09n":
    case "10n":
      height = 50;
      width = 50;
      link = Image09n;
      break;
    case "11d":
      height = 50;
      width = 54;
      link = Image11d;
      break;
    case "11n":
      height = 50;
      width = 54;
      link = Image11n;
      break;
    case "13d":
      height = 50;
      width = 61;
      link = Image13d;
      break;
    case "13n":
      height = 50;
      width = 61;
      link = Image13n;
      break;
    case "50d":
      height = 50;
      width = 64;
      link = Image50d;
      break;
    case "50n":
      height = 50;
      width = 56;
      link = Image50n;
      break;
    default:
      height = 50;
      width = 52;
      link = Image01d;
      break;
  }

  return (
    <Image
      style={{ width: width * size, height: height * size }}
      source={link}
    />
  );
}
