import { GetServerSideProps, GetServerSidePropsContext } from "next";
import weatherByCityQuery from "queries/weatherByCityQuery";
import getUserCityByIp from "services/getUserCityByIp";

const getMainPageInitialProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const userIp = context.req.socket.remoteAddress;
  let userCity = null;

  if (userIp) {
    userCity = await getUserCityByIp(userIp);
  }
  const weather = await weatherByCityQuery("Moscow");

  return {
    props: {
      weather,
      userIp,
      userCity,
    },
  };
};

export default getMainPageInitialProps;
