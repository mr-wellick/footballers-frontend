import React from "react";
import { ThemeProvider } from "theme-ui";
import { Provider } from "react-redux";
import { store } from "../src/redux/";
import theme from "../theme";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
