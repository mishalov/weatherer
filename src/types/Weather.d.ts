interface IWeatherClouds {
  all: number;
  humidity: number;
  visibility: number;
}

interface IWeatherTemperature {
  actual: number;
  feelsLike: number;
  max: number;
  min: number;
}

interface IWeatherWind {
  deg: number;
  speed: number;
}

interface IWeatherSummary {
  description: string;
  icon: string;
  title: string;
}

interface IWeatherObject {
  clouds: IWeatherClouds;
  summary: IWeatherSummary;
  temperature: IWeatherTemperature;
  wind: IWeatherWind;
}

interface IWeather {
  country: string;
  id: string;
  name: string;
  weather: IWeatherObject;
}
