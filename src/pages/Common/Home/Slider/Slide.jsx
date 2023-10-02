const Slide = ({ bg_img, children }) => {
  return (
    <div
      className={`bg-[url('/background/slider-1.png')] bg-no-repeat bg-cover bg-right`}
    >
      <div className="bg-black bg-opacity-50 z-10 relative">
        <div className="container mx-auto py-20 flex justify-start items-center">
          <div className="lg:px-16">
            <div className="min-h-[35rem] max-w-[50rem] flex justify-start items-center">
              <div className="text-white">{children}</div>
            </div>
          </div>
        </div>
        <img
          className="top-round-style absolute -z-10 top-0 left-0"
          src="/background/home-slider-round.svg"
          alt="home-slider-round-bg"
        />
      </div>
    </div>
  );
};

export default Slide;
