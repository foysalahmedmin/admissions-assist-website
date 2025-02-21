import { useState } from "react";
import { LuFileQuestion, LuTrash2, LuUpload } from "react-icons/lu";
import { Link } from "react-router-dom";
import Step_BasicInformation_Modal from "./Step_BasicInformation_Modal";

const Step_BasicInformation_Tr = ({ data }) => {
  const { activities_name, activity_details } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <tr className="odd:bg-white even:bg-slate-50">
        <td className="text-left px-4 py-2 whitespace-nowrap">
          {activities_name}
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
          <Step_BasicInformation_Modal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          />
        </td>
        <td className="text-left px-4 py-2">
          <div className="flex gap-2 items-center justify-center">
            <button
              type="button"
              className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
            >
              <LuUpload />
            </button>
            <button
              type="button"
              className="h-7 w-7 rounded-full flex items-center justify-center bg-red-500 text-white animate-pop active:scale-95"
            >
              <LuTrash2 />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Step_BasicInformation_Tr;
