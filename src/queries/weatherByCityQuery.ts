import { gql } from "@apollo/client";
import client from "apollo-client";

const weatherByCityQuery = async (city: string) => {
  const { data } = await client.query({
    query: gql`
      query ($city: String!) {
        getCityByName(name: $city) {
          id
          name
          country
          coord {
            lon
            lat
          }
          weather {
            summary {
              title
              description
              icon
            }
            temperature {
              actual
              feelsLike
              min
              max
            }
            wind {
              speed
              deg
            }
            clouds {
              all
              visibility
              humidity
            }
            timestamp
          }
        }
      }
    `,
    variables: { city },
  });

  return data.getCityByName;
};

export default weatherByCityQuery;
