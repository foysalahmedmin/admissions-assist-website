import React from "react";
import { LuFilter } from "react-icons/lu";
import FilterMenu from "./FilterMenu";

const filter_menus = [
  {
    _id: "01",
    title: "Course Type",
    options: [
      { value: "undergraduate", title: "Undergraduate" },
      { value: "graduate", title: "Graduate" },
      { value: "post_graduate", title: "Post Graduate" },
    ],
  },
  {
    _id: "02",
    title: "Location",
    options: [
      { value: "london", title: "London" },
      { value: "coventry", title: "Coventry" },
      {
        value: "Bangladesh",
        title: "Bangladesh",
        options: [
          { value: "dhaka", title: "Dhaka" },
          { value: "cumilla", title: "Cumilla" },
        ],
      },
      { value: "edinburgh", title: "Edinburgh" },
      { value: "edinburgh", title: "Edinburgh" },
    ],
  },
  {
    _id: "03",
    title: "Year",
    options: [
      { value: "2023_2024", title: "2023-2024" },
      { value: "2024_2025", title: "2024-2025" },
      { value: "2025_2026", title: "2025-2026" },
    ],
  },
  {
    _id: "04",
    title: "Session Starts",
    options: [
      { value: "january_24 ", title: "January 24" },
      { value: "april_24 ", title: "April 24" },
      { value: "september_24", title: "September 24" },
    ],
  },
  {
    _id: "05",
    title: "Entry Requirements",
    options: [
      { value: "BSC", title: "BSC" },
      { value: "diploma", title: "Diploma" },
      { value: "MSC", title: "MSC" },
    ],
  },
  {
    _id: "06",
    title: "English language requirements",
    options: [
      { value: "IELTS", title: "IELTS" },
      { value: "TOFEL", title: "TOFEL" },
      { value: "PTE", title: "PTE" },
    ],
  },
  {
    _id: "07",
    title: "Ranking",
    options: [
      { value: "1_100", title: "1 - 100" },
      { value: "100_200", title: "100 - 200" },
      { value: "200_500", title: "200 - 500" },
    ],
  },
];

const Filter = ({ handleSelect }) => {
  return (
    <div className="w-96">
      <div className="px-7 py-4">
        <div className="flex items-center gap-2 title text-2xl">
          <LuFilter className="text-3xl text-primary" /> <span>Filter</span>
        </div>
      </div>
      <hr />
      <div className="px-7 pb-7 pt-4 grid grid-cols-1 gap-2">
        {filter_menus?.map((menu, i) => (
          <FilterMenu handleSelect={handleSelect} key={menu._id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
