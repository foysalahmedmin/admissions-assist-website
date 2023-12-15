import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFilteredRequirement } from "@/pages/Common/Course/Course/requests/courseApi.js";
import { useQuery } from "react-query";

const Tr = ({ data, active, setActive, setIsOpen }) => {
  const navigation = useNavigate();
  const { sId, uId } = useParams();
  const { _id, name, duration, fees, study_mode } = data;
  const inputRef = useRef(null);

  const { data: requirement } = useQuery({
    queryKey: ["filtered_requirement", uId, sId, _id],
    queryFn: () => fetchFilteredRequirement(uId, sId, _id),
    enabled: !!uId && !!_id && !!sId,
  });

  return (
    <tr
      onClick={() => {
        setIsOpen(false);
        requirement?._id &&
          navigation(`/course/${sId}/${requirement?._id}/${uId}`);
      }}
      className={`${
        active === _id
          ? "bg-primary-500 text-white"
          : "hover:bg-primary-500 hover:bg-opacity-10"
      } `}
    >
      <td className="text-left">
        <label className="px-7 py-4 block">
          <p className="w-80">{name}</p>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <div>{duration}</div>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <div>{study_mode}</div>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <div>{fees}</div>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <input
            ref={inputRef}
            className="hidden peer"
            type="radio"
            name="course"
            value={_id}
            checked={active === _id}
            onChange={() => {}}
          />
          <div className="peer-checked:border-white border-text-900 h-6 w-6 border-2 rounded-full relative peer-checked:after:content-[''] after:absolute after:left-1 after:right-1 after:top-1 after:bottom-1 after:mx-auto peer-checked:after:border-[6px] peer-checked:after:border-white after:rounded-full"></div>
        </label>
      </td>
    </tr>
  );
};

export default Tr;
