import { optionalConstants } from "config";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import weatherByCity from "services/weatherByCity";
import getCityByIp from "services/getCityByIp";
import inDevelopmentOnly from "utils/inDevelopmentOnly";
import { IMainPageProps } from "components/pages/Homepage/Homepage";
import getUserIPFromRequest from "utils/getUserIPFromRequest";

const getMainPageInitialProps: GetServerSideProps<IMainPageProps> = async ({
  req,
}: GetServerSidePropsContext) => {
  const userIp = inDevelopmentOnly(
    optionalConstants.debugIpAddress,
    getUserIPFromRequest(req)
  );
  let userCity: ICity | null = null;
  let weather: IWeather | null = null;

  if (userIp && !Array.isArray(userIp)) {
    userCity = await getCityByIp(userIp);
    if (userCity && userCity.city) {
      weather = await weatherByCity(userCity.city);
    }
  }

  return {
    props: {
      weather,
      cityName: userCity ? userCity.city : null,
    },
  };
};

export default getMainPageInitialProps;
