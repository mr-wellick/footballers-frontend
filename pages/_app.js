import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/redux/";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
