import React from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Top } from "./pages/Top";
import { Layout } from "./components/Layout";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Top />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
