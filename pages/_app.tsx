import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default wrapper.withRedux(MyApp);
