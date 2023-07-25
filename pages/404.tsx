import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Page404: NextPageWithLayout = () => {
  return <div>404</div>;
};

Page404.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Page404;
