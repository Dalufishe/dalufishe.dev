import Head from "next/head";
import React, { useState } from "react";

export default function Page() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <Head>
        <title>palserver GUI 帕魯伺服器轉檔教學</title>
        <meta name="description" content="palserver GUI 帕魯伺服器轉檔教學" />
        <meta property="og:url" content="https://dalufishe-dev.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="palserver GUI 帕魯伺服器轉檔教學" />
        <meta
          property="og:description"
          content="palserver GUI 帕魯伺服器轉檔教學"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen flex justify-center items-center">
        {!clicked ? (
          <div className="relative">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/E-Gv7YvVIO4?si=WksqiS4OsTiRKGHj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <div
              className="w-full h-full absolute top-0 z-10"
              onClick={() => {
                setClicked(true);
              }}
            ></div>
          </div>
        ) : (
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/GtL1huin9EE?si=236Qme2bYut_ntZk&rel=0&amp;autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )}
      </div>
    </div>
  );
}
Page.getLayout = (page: any) => {
  return <div>{page}</div>;
};
