import {rankings} from "@/constants/filter.js";
import {fetchSearchFilteredCountries, fetchSearchFilteredSessions,} from "@/network/common/commonApi.js";
import {SetCity, SetCountry, SetEndRank, SetSession, SetStartRank,} from "@/redux/filterSlice/filterSlice.js";
import {useState} from "react";
import {LuFilter} from "react-icons/lu";
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";

// eslint-disable-next-line react/prop-types
const Filter = ({ filterSideToggle }) => {
  const dispatch = useDispatch();
  const [isLocationShow, setIsLocationShow] = useState(true);
  const [isSessionShow, setIsSessionShow] = useState(true);
  const [isRankingShow, setIsRankingShow] = useState(true);
  const [locationLength, setLocationLength] = useState(3);
  const [sessionLength, setSessionLength] = useState(3);
  const [rankingLength, setRankingLength] = useState(3);
  const [isChecked, setIsChecked] = useState(null);
  const { country, city, session, start_rank, end_rank } = useSelector(
    (state) => state.filter
  );
  const { data: countries } = useQuery({
    queryKey: ["search_filtered_country"],
    queryFn: () => fetchSearchFilteredCountries(),
  });

  const { data: sessions } = useQuery({
    queryKey: ["search_filtered_sessions"],
    queryFn: () => fetchSearchFilteredSessions(),
  });
  const handleChild = (e, i) => {
    const checkbox = e.target;
    if (checkbox.checked) {
      setIsChecked(i);
    } else {
      setIsChecked(null);
    }
  };
  return (
    <div className="w-full sm:w-96">
      <div className="px-7 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 title text-2xl">
          <LuFilter className="text-3xl text-primary-500" /> <span>Filter</span>
        </div>
        <button
          onClick={() => filterSideToggle(false)}
          className="hover:text-secondary-500 lg:hidden"
        >
          ✕
        </button>
      </div>
      <hr />
      <div className="px-7 pb-7 pt-4 grid grid-cols-1 gap-2 lg:h-auto h-[calc(100vh-9.5rem)] overflow-y-auto">
        <div>
          <div
            onClick={() => setIsLocationShow(!isLocationShow)}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <h3 className="title">Location</h3>
            <span
              className={`${
                isLocationShow ? "rotate-90" : ""
              } material-icons-outlined !text-base transition-all`}
            >
              arrow_forward_ios
            </span>
          </div>
          <hr className="" />
          <div
            className={`${
              isLocationShow ? "pt-2 max-h-screen" : "max-h-0"
            } transition-all overflow-hidden`}
          >
            <ul className="grid grid-cols-1 gap-2">
              {countries?.slice(0, locationLength)?.map((option, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={(e) => {
                        dispatch(
                          SetCountry({
                            type: "country",
                            title: e.target.name,
                            value: e.target.value,
                          })
                        );
                        handleChild(e, i);
                      }}
                      checked={country?.some((x) => x?.value === option?.value)}
                      className="h-4 w-4"
                      type="checkbox"
                      name={option?.title}
                      id={option?.value}
                      value={option?.value}
                    />
                    <label htmlFor={option?.value}>{option?.title}</label>
                  </div>
                  {option?.options && (
                    <ul
                      className={`${
                        isChecked === i ? "mt-2 max-h-screen" : "max-h-0"
                      } transition-all overflow-hidden grid grid-cols-1 gap-2 ml-4`}
                    >
                      {option?.options?.map((opt, i) => (
                        <li key={i}>
                          <div className="flex items-center gap-2">
                            <input
                              onChange={(e) => {
                                dispatch(
                                  SetCity({
                                    type: "city",
                                    country: option?.value,
                                    title: e.target.name,
                                    value: e.target.value,
                                  })
                                );
                              }}
                              checked={city?.some(
                                (c) => c?.value === opt?.value
                              )}
                              className="h-4 w-4"
                              type="checkbox"
                              name={opt?.title}
                              id={opt?.value}
                              value={opt?.value}
                            />
                            <label htmlFor={opt?.value}>{opt?.title}</label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {countries?.length >= 4 && (
              <div className="mt-2">
                {locationLength === countries?.length ? (
                  <button
                    onClick={() => setLocationLength(3)}
                    className="font-semibold"
                    type="button"
                  >
                    See Less
                  </button>
                ) : (
                  <button
                    onClick={() => setLocationLength(countries?.length)}
                    className="text-primary-500 font-semibold"
                    type="button"
                  >
                    See More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <div
            onClick={() => setIsSessionShow(!isSessionShow)}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <h3 className="title">Sessions</h3>
            <span
              className={`${
                isSessionShow ? "rotate-90" : ""
              } material-icons-outlined !text-base transition-all`}
            >
              arrow_forward_ios
            </span>
          </div>
          <hr className="" />
          <div
            className={`${
              isSessionShow ? "pt-2 max-h-screen" : "max-h-0"
            } transition-all overflow-hidden`}
          >
            <ul className="grid grid-cols-1 gap-2">
              {sessions?.slice(0, sessionLength)?.map((option, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={(e) =>
                        dispatch(
                          SetSession({
                            type: "session",
                            value: e?.target?.value,
                            title: e.target?.name,
                          })
                        )
                      }
                      checked={session?.value === option?.value}
                      className="h-4 w-4"
                      type="checkbox"
                      name={option?.title}
                      id={option?.value}
                      value={option?.value}
                    />
                    <label htmlFor={option?.value}>{option?.title}</label>
                  </div>
                </li>
              ))}
            </ul>
            {sessions?.length >= 4 && (
              <div className="mt-2">
                {sessionLength === sessions?.length ? (
                  <button
                    onClick={() => setSessionLength(3)}
                    className="font-semibold"
                    type="button"
                  >
                    See Less
                  </button>
                ) : (
                  <button
                    onClick={() => setSessionLength(sessions?.length)}
                    className="text-primary-500 font-semibold"
                    type="button"
                  >
                    See More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          <div
            onClick={() => setIsRankingShow(!isRankingShow)}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <h3 className="title">Ranking</h3>
            <span
              className={`${
                isRankingShow ? "rotate-90" : ""
              } material-icons-outlined !text-base transition-all`}
            >
              arrow_forward_ios
            </span>
          </div>
          <hr className="" />
          <div
            className={`${
              isRankingShow ? "pt-2 max-h-screen" : "max-h-0"
            } transition-all overflow-hidden`}
          >
            <ul className="grid grid-cols-1 gap-2">
              {rankings?.slice(0, rankingLength)?.map((option, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={(e) => {
                        dispatch(
                          SetStartRank(Number(e.target.value?.split("-")[0]))
                        );
                        dispatch(
                          SetEndRank(Number(e.target.value?.split("-")[1]))
                        );
                      }}
                      checked={`${start_rank}-${end_rank}` === option?.value}
                      className="h-4 w-4"
                      type="checkbox"
                      name={option?.title}
                      id={option?.value}
                      value={option?.value}
                    />
                    <label htmlFor={option?.value}>{option?.title}</label>
                  </div>
                </li>
              ))}
            </ul>
            {rankings?.length >= 4 && (
              <div className="mt-2">
                {rankingLength === rankings?.length ? (
                  <button
                    onClick={() => setRankingLength(3)}
                    className="font-semibold"
                    type="button"
                  >
                    See Less
                  </button>
                ) : (
                  <button
                    onClick={() => setRankingLength(rankings?.length)}
                    className="text-primary-500 font-semibold"
                    type="button"
                  >
                    See More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
