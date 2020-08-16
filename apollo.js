import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./utils";

const httpLink = new HttpLink({ uri: "http://192.168.168.100:4000/graphql" });
const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});
const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
