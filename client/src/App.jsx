import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
//imports globalstate store provider
import { StoreProvider } from "./utils/GlobalState";

import Nav from "./components/Nav";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(166,164,166,1) 0%, rgba(34,11,242,1) 100%)",
        }}
      >
        <StoreProvider>
          <Nav />
          <Outlet />
        </StoreProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
