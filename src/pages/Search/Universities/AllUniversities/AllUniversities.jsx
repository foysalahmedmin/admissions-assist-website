import Button from "@/components/Buttons/Button";
import UniversityCard from "@/components/Cards/UniversityCard.jsx/UniversityCard";
import Pagination from "@/components/Pagination/Pagination";
import {getFilteredUniversitySearch} from "@/pages/Search/requests/search.js";
import {SetRemoveCity, SetRemoveCountry, SetRemoveRanking, SetRemoveSession,} from "@/redux/filterSlice/filterSlice.js";
import {SetTotal} from "@/redux/tableSlice/tableSlice.js";
import {LuFilter} from "react-icons/lu";
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const AllUniversities = ({ filterSideToggle }) => {
  const dispatch = useDispatch();
  const { page, limit, search } = useSelector((state) => state.table);
  const { country, city, session, start_rank, end_rank } = useSelector(
    (state) => state.filter
  );
  const { isLoading, data: universities } = useQuery({
    queryKey: [
      "filtered_search_universities",
      page,
      limit,
      search,
      country,
      city,
      session,
      start_rank,
      end_rank,
    ],
    queryFn: () =>
      getFilteredUniversitySearch({
        page,
        limit,
        search,
        country: country?.map((c) => c?.value),
        city: city?.map((c) => c?.value),
        session: session?.value,
        start_rank,
        end_rank,
      }),
    onSuccess: (output) => {
      dispatch(SetTotal(output?.total));
    },
    enabled: search !== "" || country?.length > 0,
  });
  return (
    <div>
      <div className="flex items-center gap-4 mb-7">
        <Button
          onClick={filterSideToggle}
          className={"bg-primary-500 flex-shrink-0 lg:hidden"}
          icon={<LuFilter className="text-2xl pt-1" />}
        />
        <span className="py-2 flex-shrink-0 hidden lg:block">Filtered By:</span>
        <div className="flex flex-wrap items-center gap-2 lg:gap-4">
          {country?.map((option, i) => (
            <div
              key={i}
              className="py-1 lg:py-2 px-4 lg:px-7 rounded-full border flex items-center gap-2 lg:gap-4 text-sm lg:text-base"
            >
              <span className="capitalize">{option?.title}</span>
              <button
                onClick={() => dispatch(SetRemoveCountry(option))}
                className="hover:text-secondary-500"
              >
                ✕
              </button>
            </div>
          ))}
          {city?.map((option, i) => (
            <div
              key={i}
              className="py-1 lg:py-2 px-4 lg:px-7 rounded-full border flex items-center gap-2 lg:gap-4 text-sm lg:text-base"
            >
              <span className="capitalize">{option?.title}</span>
              <button
                onClick={() => dispatch(SetRemoveCity(option))}
                className="hover:text-secondary-500"
              >
                ✕
              </button>
            </div>
          ))}
          {session?.title && (
            <div className="py-1 lg:py-2 px-4 lg:px-7 rounded-full border flex items-center gap-2 lg:gap-4 text-sm lg:text-base">
              <span className="capitalize">{session?.title}</span>
              <button
                onClick={() => dispatch(SetRemoveSession())}
                className="hover:text-secondary-500"
              >
                ✕
              </button>
            </div>
          )}
          {start_rank > 0 && end_rank > 0 && (
            <div className="py-1 lg:py-2 px-4 lg:px-7 rounded-full border flex items-center gap-2 lg:gap-4 text-sm lg:text-base">
              <span className="capitalize">{`${start_rank}-${end_rank}`}</span>
              <button
                onClick={() => dispatch(SetRemoveRanking())}
                className="hover:text-secondary-500"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-7 mb-7 lg:mb-12">
        {universities?.data?.map((x, i) => (
          <UniversityCard
            key={i}
            isLoading:isLoading
            data={{
              image_url: x?.cover,
              _id: x?._id,
              title: x?.name,
              course_quantity: x?.subjects,
            }}
          />
        ))}
      </div>
      {universities?.data?.length > 0 && (
        <div>
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default AllUniversities;
