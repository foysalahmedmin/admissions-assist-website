/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import Tr from "@/pages/Student/Application/Process/StepForm/Steps/StepText/Table/Tr.jsx";

const Table = ({ file_format, is_require, activity, type, instruction }) => {
  return (
    <div className="overflow-x-auto grid grid-cols-1">
      <table className="w-full">
        <thead>
          <tr className="bg-input">
            <th className="text-text-900 text-left px-4 py-2 whitespace-nowrap">
              Activities
            </th>
            <th className="text-text-900 text-left px-4 py-2 whitespace-nowrap">
              File format
            </th>
            <th className="text-text-900 text-center px-4 py-2 whitespace-nowrap">
              Instruction
            </th>
            <th className="text-text-900 text-left px-4 py-2 whitespace-nowrap">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <Tr
            type={type}
            file_format={file_format}
            is_require={is_require}
            activity={activity}
            instruction={instruction}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
