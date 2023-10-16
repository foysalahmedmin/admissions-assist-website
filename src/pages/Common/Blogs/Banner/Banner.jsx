import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BackgroundLayer image_url={"/background/application-banner.png"}>
      <div className="container mx-auto lg:py-24 py-14">
        <div className="flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-3xl lg:text-5xl title text-white mb-4">
              Blogs
            </h1>
            <div className="flex items-center justify-center gap-4">
              <span className="material-icons-outlined">arrow_back</span>
              <div className="flex items-center gap-2">
                <span>
                  <Link to={"/"}>Home</Link>
                </span>
                <span>/</span>
                <span>
                  <Link to={"/Blogs"}>Blogs</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayer>
  );
};

export default Banner;
