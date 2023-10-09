import { useState } from "react";
import { LuCheck, LuDownload, LuFileQuestion } from "react-icons/lu";
import { BsExclamationLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import DocumentModal from "./DocumentModal";

const Tr = ({ data }) => {
  const { activities_name, activity_details } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <tr className="odd:bg-white even:bg-slate-50">
        <td className=" text-left px-4 py-2"><span className="w-60">{activities_name}</span></td>
        <td className="text-left px-4 py-2">
          <Link className="underline text-primary">{activity_details}</Link>
        </td>
        <td className="text-left px-4 py-2">
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="h-7 w-7 mx-auto rounded-full flex items-center justify-center bg-darkblue text-white animate-pop active:scale-95"
          >
            <LuFileQuestion />
          </button>
          <DocumentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </td>
        <td className="text-left px-4 py-2">
          <div className="flex gap-2 items-center justify-center">
            <button
              type="button"
              className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
            >
              <LuCheck />
            </button>
            <button
              type="button"
              className="h-7 w-7 rounded-full flex items-center justify-center bg-red-500 text-white animate-pop active:scale-95"
            >
              <BsExclamationLg />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tr;
