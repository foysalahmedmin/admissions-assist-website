import { useRef } from "react";

const Tr = ({ data, active, setActive }) => {
  const { _id, location, duration, session, study_mode, class_starts } = data;
  const inputRef = useRef(null);

  const handleClick = () => {
    setActive(_id);
    inputRef.current.checked = true;
  };

  return (
    <tr
      onClick={handleClick}
      className={`${
        active === _id
          ? "bg-primary-500 text-white"
          : "hover:bg-primary-500 hover:bg-opacity-10"
      } `}
    >
      <td className="text-left">
        <label className="px-7 py-4 block">
          <p className="w-80">{location}</p>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <div>{duration}</div>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <div>{session}</div>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <div>{study_mode}</div>
        </label>
      </td>
      <td className="text-left">
        <label className="px-7 py-4 block">
          <div>{class_starts}</div>
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
