import App from "next/app";
import { StoreProvider } from "@utils/stateManagement";

class Application extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </>
    );
  }
}

export default Application;
