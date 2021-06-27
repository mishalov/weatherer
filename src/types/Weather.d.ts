interface IWeatherTemperature {
  actual: number;
  feelsLike: number;
  max: number;
  min: number;
}

interface IWeatherSummary {
  description: string;
  icon: string;
  title: string;
}

interface IWeatherObject {
  summary: IWeatherSummary;
  temperature: IWeatherTemperature;
}

interface IWeather {
  country: string;
  id: string;
  name: string;
  weather: IWeatherObject;
}
