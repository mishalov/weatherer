import { IByCityPageProps } from "components/pages/ByCity/ByCity";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import weatherByCity from "services/weatherByCity";

const getByCityInitialProps: GetServerSideProps<IByCityPageProps> = async ({
  query,
  res,
}: GetServerSidePropsContext) => {
  const userCity = query.city;

  if (!userCity || Array.isArray(userCity)) {
    res.statusCode = 404;
    return {
      props: {
        weather: null,
        cityName: null,
      },
    };
  }

  const weather = await weatherByCity(userCity);

  if (!weather) res.statusCode = 404;

  return {
    props: {
      weather,
      cityName: userCity,
    },
  };
};
export default getByCityInitialProps;
