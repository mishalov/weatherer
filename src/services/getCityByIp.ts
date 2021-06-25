import { ipstackAccessKey } from "config";

const getCityByIp = async (ip: string) => {
  const rawData = await fetch(
    `https://api.ipstack.com/${ip}/access_key=${ipstackAccessKey}`
  );
  return await rawData.json();
};

export default getCityByIp;
