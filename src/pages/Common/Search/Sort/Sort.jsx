import { LuArrowDownUp, LuSearch } from "react-icons/lu";

const Sort = () => {
  return (
    <section className="h-20 py-4 bg-primary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-7">
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
          <div>
            <div className="flex gap-2 items-center justify-center text-white">
              <label htmlFor="sort" className="flex items-center justify-center gap-2">
                <LuArrowDownUp className="text-xl" />
                <span>Sort By:</span>
              </label>
              <select
                className="outline-none bg-transparent font-bold"
                name="sort"
                id="sort"
              >
                <option value="">Select Sort</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sort;
