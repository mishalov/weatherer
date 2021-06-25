import { gql } from "@apollo/client";
import client from "apollo-client";

const weatherByCity = async (city: string): Promise<IWeather | null> => {
  const { data } = await client.query({
    query: gql`
      query($city: String!) {
        getCityByName(name: $city) {
          id
          name
          country
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

export default weatherByCity;
