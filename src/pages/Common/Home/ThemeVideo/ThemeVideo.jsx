import ReactPlayer from "react-player";
import video from "@/assets/videos/theme-video.mp4";
import { useEffect, useRef, useState } from "react";

const ThemeVideo = () => {
  return (
    <section id="theme-video">
      <div className="container relative  lg:-mb-48 -mb-28">
        <div className="rounded-3xl overflow-hidden">
          <ReactPlayer
            style={{ borderRadius: "0.75rem" }}
            controls
            width={"100%"}
            height={"auto"}
            url={video}
          />
        </div>
      </div>

      <div className="bg-[url('/background/theme-video-img.png')] bg-no-repeat bg-cover bg-right">
        <div className="lg:pt-48 lg:pb-24 pt-28 pb-14 bg-primary bg-opacity-50"></div>
      </div>
    </section>
  );
};

export default ThemeVideo;
