import { optionalConstants } from "config";
import weatherByCity from "services/weatherByCity";

const getBaseProps = async () => {
  const listOfTheCities = optionalConstants.importantCities;
  const weatherInImportantCities = (
    await Promise.all(listOfTheCities.map((city) => weatherByCity(city)))
  ).filter((el) => el);

  return {
    props: { weatherInImportantCities },
  };
};

export default getBaseProps;
