const getUserCityByIp = async (ip: string) => {
  const rawData = await fetch(`https://ipapi.co/${ip}/json/`);
  return await rawData.json();
};

export default getUserCityByIp;
