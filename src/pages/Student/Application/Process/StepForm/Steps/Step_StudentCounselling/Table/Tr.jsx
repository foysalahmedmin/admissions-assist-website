import DateInputRoundedIcon from "@/components/DateInputRoundedIcon/DateInputRoundedIcon";
import { useState } from "react";
import { LuFileQuestion } from "react-icons/lu";
import { Link } from "react-router-dom";
import DocumentModal from "./DocumentModal";

const Tr = ({ data }) => {
  const { activities_name, activity_details } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <tr className="odd:bg-white even:bg-slate-50">
        <td className=" text-left px-4 py-2">
          <span className="w-60">{activities_name}</span>
        </td>
        <td className="text-left px-4 py-2">
          <Link className="underline text-primary-500">{activity_details}</Link>
        </td>
        <td className="text-left px-4 py-2">
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="h-7 w-7 mx-auto rounded-full flex items-center justify-center bg-navyblue-900 text-white animate-pop active:scale-95"
          >
            <LuFileQuestion />
          </button>
          <DocumentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </td>
        <td className="text-left px-4 py-2">
          <div className="flex gap-2 items-center justify-center">
            <DateInputRoundedIcon
              className={
                "p-1 pl-4 border rounded-full focus-within:border-primary-500"
              }
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tr;
