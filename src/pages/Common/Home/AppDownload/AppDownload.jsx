import appStore from "@/assets/images/app-store.png";
import playStore from "@/assets/images/play-store.png";
import downloadImg from "@/assets/images/app-download.png";
import downloadIcon from "@/assets/images/icons/download-sky-blue.svg";

const AppDownload = () => {
  return (
    <section className="lg:py-40 pt-14 lg:min-h-screen-less-20 flex flex-col items-center justify-center gap-12 lg:gap-0 bg-primary bg-opacity-5 lg:bg-opacity-100 lg:bg-[url('/background/app-download.png')] bg-no-repeat bg-cover bg-bottom">
      <div className="container mx-auto">
        <div className="lg:w-1/2 lg:text-left text-center">
          <div className="mb-7">
            <h1 className="title text-3xl lg:text-5xl mb-4">
              Download the Admission Assist App and Get Started
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <h3 className="title text-2xl">Download the App Now</h3>
              <img src={downloadIcon} alt="" />
            </div>
            <div className="flex items-center justify-center lg:justify-start  gap-4">
              <div className="h-12 lg:h-14">
                <img
                  className="h-full object-cover object-center"
                  src={playStore}
                  alt=""
                />
              </div>
              <div className="h-12 lg:h-14">
                <img
                  className="h-full object-cover object-center"
                  src={appStore}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="object-cover lg:hidden" src={downloadImg} alt="" />
      </div>
    </section>
  );
};

export default AppDownload;
