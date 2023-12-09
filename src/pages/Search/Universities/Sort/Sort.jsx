import { LuArrowDownUp, LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { SetSearch, SetSort } from "@/redux/tableSlice/tableSlice.js";

const Sort = () => {
  const dispatch = useDispatch();
  const { search, sort } = useSelector((state) => state.table);
  return (
    <section className="lg:h-20 py-4 bg-primary-500">
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse items-center justify-between gap-4">
          <div className="px-4 w-96 bg-white flex items-center gap-2 rounded-full border border-transparent focus-within:border-text-500">
            <LuSearch className="text-xl text-primary-500" />
            <input
              className="py-3 flex-1 w-full outline-none bg-transparent block"
              type="text"
              value={search}
              onChange={(e) => dispatch(SetSearch(e.target.value))}
              placeholder="Search"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center justify-center text-white">
              <label
                htmlFor="sort"
                className="flex items-center justify-center gap-2"
              >
                <LuArrowDownUp className="text-xl" />
                <span>Sort By:</span>
              </label>
              <select
                className="outline-none bg-transparent font-bold"
                name="sort"
                value={sort}
                onChange={(e) => dispatch(SetSort(Number(e.target.value)))}
                id="sort"
              >
                <option value="">Select Sort</option>
                <option value={-1}>ASC</option>
                <option value={1}>DESC</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sort;
