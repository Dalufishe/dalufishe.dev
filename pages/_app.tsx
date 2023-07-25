import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { wrapper } from "../redux/store";
import DefaultLayout from "../components/_Global/layout/DefaultLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);
  return getLayout(
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default wrapper.withRedux(MyApp);
