import { Provider } from "react-redux";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </PersistGate>
      <Analytics />
    </>
  );
}

export default MyApp;
