import {useDispatch, useSelector} from "react-redux";
import {SetSearchTab} from "@/redux/filterSlice/filterSlice.js";
import {SetSearch} from "@/redux/tableSlice/tableSlice.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

// eslint-disable-next-line react/prop-types
const Search = ({ position }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { search_tab } = useSelector((state) => state.filter);
  const { search } = useSelector((state) => state.table);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (search && search_tab === "universities") {
        navigation("/search/universities");
      } else if (search && search_tab === "courses") {
        navigation("/search/courses");
      } else if (!search || !search_tab) {
        toast.warn("Please type something");
      }
    }
  };

  return (
    <div className="p-4 bg-black-900 bg-opacity-50 rounded-xl">
      <div
        className={`flex gap-4 items-end ${
          position === "center"
            ? "justify-center"
            : position === "right"
            ? "justify-end"
            : "justify-start"
        }`}
      >
        {/*<button*/}
        {/*  onClick={() => setTab("all")}*/}
        {/*  className={`py-3 rounded-t-xl ${*/}
        {/*    tab === "all" ? "bg-primary-500 px-4" : ""*/}
        {/*  }`}*/}
        {/*>*/}
        {/*  All Results*/}
        {/*</button>*/}
        <button
          onClick={() => dispatch(SetSearchTab("universities"))}
          className={`py-3 rounded-t-xl ${
            search_tab === "universities" ? "bg-primary-500 px-4" : ""
          }`}
        >
          Universities
        </button>
        <button
          onClick={() => dispatch(SetSearchTab("courses"))}
          className={`py-3 rounded-t-xl ${
            search_tab === "courses" ? "bg-primary-500 px-4" : ""
          }`}
        >
          Courses
        </button>
      </div>
      <div
        className={`${
          search_tab === "universities"
            ? position !== "center"
              ? "rounded-tl-none"
              : ""
            : ""
        } w-full flex items-center gap-3 px-4 border border-primary-500 rounded-xl bg-primary-500 bg-opacity-20`}
      >
        <span className="material-icons">search</span>
        <input
          className="flex-1 w-full bg-transparent outline-none py-4"
          type="search"
          value={search}
          onChange={(e) => dispatch(SetSearch(e.target.value))}
          onKeyPress={handleKeyPress}
          placeholder={
            search_tab === "universities"
              ? "Type university name and press enter"
              : "Type course/subject name and press enter"
          }
        />
      </div>
    </div>
  );
};

export default Search;
