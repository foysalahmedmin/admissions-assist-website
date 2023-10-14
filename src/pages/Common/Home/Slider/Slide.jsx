const Slide = ({ bg_img, children }) => {
  return (
    <div
      className={`bg-[url('/background/slider-1.png')] bg-no-repeat bg-cover bg-right`}
    >
      <div className="bg-black bg-opacity-50 z-10 relative">
        <div className="container mx-auto lg:min-h-screen lg:py-24 py-14 flex justify-start items-center">
          <div className="lg:px-16 pt-20">
            <div className="max-w-[50rem] text-white">
              <div className="text-white">{children}</div>
            </div>
          </div>
        </div>
        <img
          className="top-round-style h-[80vh] absolute -z-10 top-0 left-0"
          src="/background/home-slider-round.svg"
          alt="home-slider-round-bg"
        />
      </div>
    </div>
  );
};

export default Slide;
