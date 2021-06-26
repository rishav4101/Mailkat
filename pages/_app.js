import "../styles/globals.css";
import "../styles/Mail.css";
import React from "react";
import App from "next/app";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {ReactReduxContext} from 'react-redux';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/Theme";
import Script from 'next/script'

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (

      <ReactReduxContext.Consumer>
      {({ store }) => (
          <PersistGate persistor={store.__PERSISTOR} loading={<div>Loading</div>}>
            <ThemeProvider theme={theme}>
            <Script src="https://cdn.jsdelivr.net/npm/codemirror@5.49.0/lib/codemirror.min.js"/>
      <Script src="https://cdn.jsdelivr.net/npm/codemirror@5.49.0/mode/htmlmixed/htmlmixed.js"/>
      <Script src="https://cdn.jsdelivr.net/npm/codemirror@5.49.0/mode/xml/xml.js"/>
      <Script src="https://cdn.jsdelivr.net/npm/codemirror@5.49.0/mode/css/css.js"/>
              <Component {...pageProps} />
              </ThemeProvider>
          </PersistGate>
      )}
    </ReactReduxContext.Consumer>
       
    );
  }
}

export default wrapper.withRedux(MyApp);
