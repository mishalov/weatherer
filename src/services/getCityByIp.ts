import { mandatoryConstants } from "config";

const getCityByIp = async (ip: string): Promise<ICity | null> => {
  try {
    const rawData = await fetch(
      `http://api.ipstack.com/${ip}?access_key=${mandatoryConstants.ipstackAccessKey}`
    );
    const cityResult: ICity = await rawData.json();
    if (cityResult.error) {
      console.log("Error in city fetch proccess: ", cityResult);
      return null;
    }

    return cityResult as ICity;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export default getCityByIp;
