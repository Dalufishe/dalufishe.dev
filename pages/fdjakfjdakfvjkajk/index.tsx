import Head from "next/head";
import React, { useState } from "react";

export default function Page() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <Head>
        <title>fdjakfjdakfvjkajk</title>
        <meta name="description" content="fdafj123kj4krjfkdsjfkjk4213" />
        <meta property="og:url" content="https://dalufishe-dev.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hm, it looks like that file might've been a virus. Instead of cooking up trouble, try cooking up a Slow-Cooked Pulled Pork SlidersHm, it looks like that file might've been a virus. Instead of cooking up trouble, try cooking up a Slow-Cooked Pulled Pork SlidersHm, it looks like that file might've been a virus. Instead of cooking up trouble, try cooking up a Slow-Cooked Pulled Pork SlidersHm, it looks like that file might've been a virus. Instead of cooking up trouble, try cooking up a Slow-Cooked Pulled Pork Sliders"
        />
        <meta property="og:description" content="fdafa21313131ds124" />

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
Page.getLayout = (page) => {
  return <div>{page}</div>;
};
