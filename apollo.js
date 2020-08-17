import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./utils";
import { createUploadLink } from "apollo-upload-client";
const uploadLink = createUploadLink({
  uri: "http://192.168.168.100:4000/graphql",
});
//const httpLink = new HttpLink({ uri: "http://192.168.168.100:4000/graphql" });
const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});
const link = authLink.concat(uploadLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
