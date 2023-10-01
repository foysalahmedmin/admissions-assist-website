import video from "@/assets/videos/theme-video.mp4";
import thumbnail from "@/assets/images/theme-video-thumbnail.png";

const ThemeVideo = () => {
  return (
    <section id="theme-video">
      <div className="container relative  lg:-mb-48 -mb-28">
        <div className="lg:px-12 px-7">
          <div className="overflow-hidden">
            <video className="mx-auto rounded-3xl" poster={thumbnail} controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="bg-[url('/background/sub-footer.png')] bg-no-repeat bg-cover bg-right">
        <div className="lg:pt-48 lg:pb-24 pt-28 pb-14 bg-primary bg-opacity-70"></div>
      </div>
    </section>
  );
};

export default ThemeVideo;
