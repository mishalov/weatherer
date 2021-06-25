import { GetServerSideProps, GetServerSidePropsContext } from "next";
import weatherByCityQuery from "queries/weatherByCityQuery";
import getCityByIp from "services/getCityByIp";

const getMainPageInitialProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const userIp =
    process.env.DEBUG_IP_ADDRESS || context.req.socket.remoteAddress;
  let userCity = null;

  if (userIp) {
    userCity = await getCityByIp(userIp);
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
