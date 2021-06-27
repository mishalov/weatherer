import { optionalConstants } from "config";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import weatherByCity from "services/weatherByCity";
import getCityByIp from "services/getCityByIp";
import inDevelopmentOnly from "utils/inDevelopmentOnly";

const getMainPageInitialProps: GetServerSideProps = async ({
  req,
  query,
}: GetServerSidePropsContext) => {
  console.log("query: ", query);

  const userIp = inDevelopmentOnly(
    optionalConstants.debugIpAddress,
    req.socket.remoteAddress
  );
  let userCity: ICity | null = null;
  let weather: IWeather | null = null;

  if (userIp) {
    userCity = await getCityByIp(userIp);
    if (userCity) {
      weather = await weatherByCity(userCity.city);
    }
  }

  return {
    props: {
      weather,
      userCity,
    },
  };
};

export default getMainPageInitialProps;
