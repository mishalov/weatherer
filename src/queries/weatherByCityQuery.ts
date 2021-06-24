import { gql } from "@apollo/client";
import client from "apollo-client";

const weatherByCityQuery = async (city: string) => {
  const { data } = await client.query({
    query: gql`
      query {
        getCityByName(city: String!) {
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
};

export default weatherByCityQuery;
