import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://192.168.168.100:4000/graphql" }),
  cache: new InMemoryCache(),
});

export default client;
