
import { useState } from "react";
import Tr from "./Tr";
import {
  BiBookOpen,
  BiHistory,
  BiMap,
  BiTimeFive,
} from "react-icons/bi";

const Table = ({ table_data }) => {
  const [active, setActive] = useState("");
  return (
    <div className="overflow-x-auto grid grid-cols-1 text-title">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-title text-left px-7 py-4 whitespace-nowrap w-80">
              <div className="flex items-center gap-2">
                <BiMap className="text-primary text-xl" />
                <span className="font-normal text-sm">Location</span>
              </div>
            </th>
            <th className="text-title text-left px-7 py-4 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <BiTimeFive className="text-primary text-xl" />
                <span className="font-normal text-sm">Duration</span>
              </div>
            </th>
            <th className="text-title text-center px-7 py-4 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <BiHistory className="text-primary text-xl" />
                <span className="font-normal text-sm">Session</span>
              </div>
            </th>
            <th className="text-title text-center px-7 py-4 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <BiBookOpen className="text-primary text-xl" />
                <span className="font-normal text-sm">Study Mode</span>
              </div>
            </th>
            <th className="text-title text-center px-7 py-4 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <BiBookOpen className="text-primary text-xl" />
                <span className="font-normal text-sm">Study Mode</span>
              </div>
            </th>
            <th className="text-title text-center px-7 py-4 whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((data, i) => (
            <Tr key={i} data={data} active={active} setActive={setActive} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
