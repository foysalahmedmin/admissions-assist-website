import Search from "@/components/Search/Search";

const Banner = () => {
  return (
    <section
      className={`bg-[url('/background/slider-1.png')] bg-no-repeat bg-cover bg-right`}
    >
      <div className="bg-black bg-opacity-50 relative pb-36">
        <div className="container mx-auto min-h-screen-less-20 lg:py-24 py-14 flex justify-center items-center">
          <div className="lg:px-16">
            <div className="max-w-[50rem] text-white text-center">
              <div className="mb-12">
                <h1 className="lg:text-5xl text-3xl lg:leading-[4rem] title text-white mb-6">
                  Discover Your Perfect University Match in the UK
                </h1>
                <p>
                  Bridging the gap between skilled local service providers and
                  those who need them. Discover, hire, and manage local
                  professionals hassle-free.
                </p>
              </div>
              <Search position={"center"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
