import { useState } from "react";

const Search = () => {
  const [tab, setTab] = useState("all");
  return (
    <div className="p-4 bg-black bg-opacity-50 rounded-xl">
      <div className="flex gap-4">
        <button
          onClick={() => setTab("all")}
          className={`py-3 rounded-t-xl ${
            tab === "all" ? "bg-primary px-4" : ""
          }`}
        >
          All Results
        </button>
        <button
          onClick={() => setTab("universities")}
          className={`py-3 rounded-t-xl ${
            tab === "universities" ? "bg-primary px-4" : ""
          }`}
        >
          Universities
        </button>
        <button
          onClick={() => setTab("courses")}
          className={`py-3 rounded-t-xl ${
            tab === "courses" ? "bg-primary px-4" : ""
          }`}
        >
          Courses
        </button>
      </div>
      <div className="w-full flex items-center gap-3 px-4 border border-primary rounded-xl rounded-tl-none bg-primary bg-opacity-20">
        <span className="material-icons">search</span>
        <input
          className="flex-1 w-full bg-transparent outline-none py-4"
          type="search"
          placeholder="Search for courses, universities & information"
        />
      </div>
    </div>
  );
};

export default Search;
