import { LuSearch } from "react-icons/lu";

const TopSearch = () => {
  return (
    <section className="lg:h-20 py-4 bg-primary">
      <div className="px-[3.5%]">
        <div className="flex flex-wrap-reverse items-center justify-between gap-4">
          <div className="px-4 w-96 bg-white flex items-center gap-2 rounded-full border border-transparent focus-within:border-text">
            <LuSearch className="text-xl text-primary" />
            <input
              className="py-3 flex-1 w-full outline-none bg-transparent block"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSearch;
