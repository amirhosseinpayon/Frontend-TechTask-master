import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/scss/main.scss";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import Layout from "./components/layout/Layout";
import Routes from "./routes/Routes";

const link = from([new HttpLink({ uri: "/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App: React.FC = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
