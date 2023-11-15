import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./slices/index";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { DEFAULT_URL } from "./constant/constant";

const client = new ApolloClient({
  uri: DEFAULT_URL,
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
