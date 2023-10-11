import appStore from "@/assets/images/app-store.png";
import playStore from "@/assets/images/play-store.png";
import downloadImg from "@/assets/images/app-download.png";

const AppDownload = () => {
  return (
    <section className="lg:py-24 py-14 bg-primary bg-opacity-5 lg:bg-opacity-100 lg:bg-[url('/background/app-download.png')] bg-no-repeat bg-cover bg-right">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div>
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
              <div>
                <h3 className="title text-2xl mb-4">Download the App Now</h3>
              </div>
              <div className="flex items-center gap-4">
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
          <div>
            <img className="h-full object-cover lg:hidden" src={downloadImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
