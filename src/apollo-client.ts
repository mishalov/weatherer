import { ApolloClient, InMemoryCache } from "@apollo/client";
import { mandatoryConstants } from "config";

const client = new ApolloClient({
  uri: mandatoryConstants.weatherEndpoint,
  cache: new InMemoryCache(),
});

export default client;
