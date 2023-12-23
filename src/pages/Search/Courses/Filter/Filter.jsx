/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import {LuFilter} from "react-icons/lu";
import {useState} from "react";
import {useQuery} from "react-query";
import {
  fetchCourseTypes,
  fetchSearchFilteredCountries,
  fetchSearchFilteredSessions,
} from "@/network/common/commonApi.js";
import {useDispatch, useSelector} from "react-redux";
import {
  SetCity,
  SetCountry,
  SetCourseType,
  SetEndRank,
  SetPoint,
  SetScore,
  SetSession,
  SetStartRank,
  SetToggleAssessment,
  SetToggleExperience,
  SetToggleIelts,
  SetToggleLevel3,
  SetTogglePoint,
} from "@/redux/filterSlice/filterSlice.js";
import {rankings} from "@/constants/filter.js";

// eslint-disable-next-line react/prop-types
const Filter = ({ filterSideToggle, handleSelect, selectedOptions }) => {
  // const { title, options } = menu;
  const dispatch = useDispatch();
  const [isCourseTypeShow, setIsCourseTypeShow] = useState(true);
  const [isLocationShow, setIsLocationShow] = useState(true);
  const [isSessionShow, setIsSessionShow] = useState(true);
  const [isReqShow, setIsReqShow] = useState(true);
  const [isEngReqShow, setIsEngReqShow] = useState(true);
  const [isRankingShow, setIsRankingShow] = useState(true);
  const [courseTypeLength, setCourseTypeLength] = useState(3);
  const [locationLength, setLocationLength] = useState(3);
  const [sessionLength, setSessionLength] = useState(3);
  const [reqLength, setReqLength] = useState(false);
  const [rankingLength, setRankingLength] = useState(3);
  const {
    course_types,
    country,
    city,
    session,
    start_rank,
    end_rank,
    isPoint,
    point,
    ielts,
    score,
    experience,
    level_3,
    assessment,
  } = useSelector((state) => state.filter);

  const [isChecked, setIsChecked] = useState(null);
  const handleChild = (e, i) => {
    const checkbox = e.target;
    if (checkbox.checked) {
      setIsChecked(i);
    } else {
      setIsChecked(null);
    }
  };

  const { data: courseTypes } = useQuery({
    queryKey: ["course_types"],
    queryFn: () => fetchCourseTypes(),
  });

  const { data: countries } = useQuery({
    queryKey: ["search_filtered_country"],
    queryFn: () => fetchSearchFilteredCountries(),
  });

  const { data: sessions } = useQuery({
    queryKey: ["search_filtered_sessions"],
    queryFn: () => fetchSearchFilteredSessions(),
  });

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
            onClick={() => setIsCourseTypeShow(!isCourseTypeShow)}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <h3 className="title">Course Type</h3>
            <span
              className={`${
                isCourseTypeShow ? "rotate-90" : ""
              } material-icons-outlined !text-base transition-all`}
            >
              arrow_forward_ios
            </span>
          </div>
          <hr className="" />
          <div
            className={`${
              isCourseTypeShow ? "pt-2 max-h-screen" : "max-h-0"
            } transition-all overflow-hidden`}
          >
            <ul className="grid grid-cols-1 gap-2">
              {courseTypes?.slice(0, courseTypeLength).map((option, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={(e) => {
                        dispatch(
                          SetCourseType({
                            _id: e.target.value,
                            name: e.target.name,
                          })
                        );
                      }}
                      checked={course_types?.some(
                        (x) => x?._id === option?._id
                      )}
                      className="h-4 w-4"
                      type="checkbox"
                      name={option?.name}
                      id={option?._id}
                      value={option?._id}
                    />
                    <label htmlFor={option?._id}>{option?.name}</label>
                  </div>
                </li>
              ))}
            </ul>
            {courseTypes?.length > 3 && (
              <div className="mt-2">
                {courseTypeLength === courseTypes?.length ? (
                  <button
                    onClick={() => setCourseTypeLength(3)}
                    className="font-semibold"
                    type="button"
                  >
                    See Less
                  </button>
                ) : (
                  <button
                    onClick={() => setCourseTypeLength(courseTypes?.length)}
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
                  {option?.options?.length > 0 && (
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
            onClick={() => setIsReqShow(!isReqShow)}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <h3 className="title">Entry Requirements</h3>
            <span
              className={`${
                isReqShow ? "rotate-90" : ""
              } material-icons-outlined !text-base transition-all`}
            >
              arrow_forward_ios
            </span>
          </div>
          <hr className="" />
          <div
            className={`${
              isReqShow ? "pt-2 max-h-screen" : "max-h-0"
            } transition-all overflow-hidden`}
          >
            <ul className="grid grid-cols-1 gap-2">
              <li>
                <div className="flex items-center gap-2">
                  <input
                    onChange={() => {
                      dispatch(SetTogglePoint());
                    }}
                    checked={isPoint}
                    className="h-4 w-4"
                    type="checkbox"
                    name={"point"}
                    id={"point"}
                    value={isPoint}
                  />
                  <label htmlFor={"point"}>{"Point"}</label>
                </div>
                {isPoint && (
                  <div
                    className={`${
                      isPoint ? "mt-2 max-h-screen" : "max-h-0"
                    } transition-all overflow-hidden ml-4`}
                  >
                    <input
                      className="outline-none border-b focus-within:border-text-500"
                      type="number"
                      value={point > 0 && point}
                      onChange={(e) =>
                        dispatch(SetPoint(Number(e.target.value)))
                      }
                      name=""
                      id=""
                      placeholder="Point"
                    />
                  </div>
                )}
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <input
                    onChange={() => {
                      dispatch(SetToggleExperience());
                    }}
                    checked={experience}
                    className="h-4 w-4"
                    type="checkbox"
                    name={"experience"}
                    id={"experience"}
                    value={experience}
                  />
                  <label htmlFor={"experience"}>{"Experience"}</label>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <input
                    onChange={() => {
                      dispatch(SetToggleLevel3());
                    }}
                    checked={level_3}
                    className="h-4 w-4"
                    type="checkbox"
                    name={"level_3"}
                    id={"level_3"}
                    value={level_3}
                  />
                  <label htmlFor={"level_3"}>{"Level 3"}</label>
                </div>
              </li>
              {reqLength && (
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={() => {
                        dispatch(SetToggleAssessment());
                      }}
                      checked={assessment}
                      className="h-4 w-4"
                      type="checkbox"
                      name={"assessment"}
                      id={"assessment"}
                      value={assessment}
                    />
                    <label htmlFor={"assessment"}>{"Assessment"}</label>
                  </div>
                </li>
              )}
            </ul>
            <div className="mt-2">
              {reqLength ? (
                <button
                  onClick={() => setReqLength(false)}
                  className="font-semibold"
                  type="button"
                >
                  See Less
                </button>
              ) : (
                <button
                  onClick={() => setReqLength(true)}
                  className="text-primary-500 font-semibold"
                  type="button"
                >
                  See More
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => setIsEngReqShow(!isReqShow)}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <h3 className="title">English Language Requirements</h3>
            <span
              className={`${
                isReqShow ? "rotate-90" : ""
              } material-icons-outlined !text-base transition-all`}
            >
              arrow_forward_ios
            </span>
          </div>
          <hr className="" />
          <div
            className={`${
              isEngReqShow ? "pt-2 max-h-screen" : "max-h-0"
            } transition-all overflow-hidden`}
          >
            <ul className="grid grid-cols-1 gap-2">
              <li>
                <div className="flex items-center gap-2">
                  <input
                    onChange={() => {
                      dispatch(SetToggleIelts());
                    }}
                    checked={ielts}
                    className="h-4 w-4"
                    type="checkbox"
                    name={"ielts"}
                    id={"ielts"}
                    value={ielts}
                  />
                  <label htmlFor={"ielts"}>{"IELTS"}</label>
                </div>
                {ielts && (
                  <div
                    className={`${
                      ielts ? "mt-2 max-h-screen" : "max-h-0"
                    } transition-all overflow-hidden ml-4`}
                  >
                    <input
                      className="outline-none border-b focus-within:border-text-500"
                      type="number"
                      value={score > 0 && score}
                      onChange={(e) =>
                        dispatch(SetScore(Number(e.target.value)))
                      }
                      name=""
                      id=""
                      placeholder="Score"
                    />
                  </div>
                )}
              </li>
            </ul>
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
        {/*{filter_menus?.map((menu, i) => (*/}
        {/*  <FilterMenu*/}
        {/*    handleSelect={handleSelect}*/}
        {/*    key={menu._id}*/}
        {/*    menu={menu}*/}
        {/*    selectedOptions={selectedOptions}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default Filter;
