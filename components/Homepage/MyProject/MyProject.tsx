import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { classes } from "../../../utils/classes";
import Image from "next/image";
import myBlogImage from "./assets/myblog.png";
import Block from "../../ui/Block/Block";

const MyProject: FC = () => {
  return (
    <div className={classes("w-full", "flex flex-col items-center")}>
      <Swiper
        className={classes("w-[65%]")}
        spaceBetween={33}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            className={classes(
              "bg-secondary",
              "h-[400px]",
              "rounded-lg",
              "flex flex-col items-center",
              "p-3",
            )}
          >
            {/* Image */}
            <Image
              src={myBlogImage}
              alt="my-blog-image"
              width={400}
              height={400}
            />
            <Block value={3} />
            {/* Title */}
            <h3 className={classes("text-xl")}>My Blog</h3>
            <Block value={2} />
            {/* Description */}
            <h5 className={classes("text-md text-lesslight")}>
              最近發現自己把一些用了很久的工具換成一些新的酷東西了，所以來學一些其他的部落格作者一樣寫一篇自己的日常工具軟體分享
              。
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes(
              "bg-secondary",
              "h-[400px]",
              "rounded-lg",
              "flex flex-col items-center",
              "p-3",
            )}
          >
            {/* Image */}
            <Image
              src={myBlogImage}
              alt="my-blog-image"
              width={400}
              height={400}
            />
            <Block value={3} />
            {/* Title */}
            <h3 className={classes("text-xl")}>My Blog</h3>
            <Block value={2} />
            {/* Description */}
            <h5 className={classes("text-md text-lesslight")}>
              最近發現自己把一些用了很久的工具換成一些新的酷東西了，所以來學一些其他的部落格作者一樣寫一篇自己的日常工具軟體分享
              。
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes(
              "bg-secondary",
              "h-[400px]",
              "rounded-lg",
              "flex flex-col items-center",
              "p-3",

            )}
          >
            {/* Image */}
            <Image
              src={myBlogImage}
              alt="my-blog-image"
              width={400}
              height={400}
            />
            <Block value={3} />
            {/* Title */}
            <h3 className={classes("text-xl")}>My Blog</h3>
            <Block value={2} />
            {/* Description */}
            <h5 className={classes("text-md text-lesslight")}>
              最近發現自己把一些用了很久的工具換成一些新的酷東西了，所以來學一些其他的部落格作者一樣寫一篇自己的日常工具軟體分享
              。
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyProject;
