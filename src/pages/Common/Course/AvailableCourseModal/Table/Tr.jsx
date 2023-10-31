const Tr = ({ data, active, setActive }) => {
  const { _id, location, duration, session, study_mode, class_starts } = data;

  return (
    <>
      <tr
        htmlFor="hello"
        className={`${
          active == _id
            ? "bg-primary-500 text-white"
            : "hover:bg-primary-500 hover:bg-opacity-10"
        } `}
      >
        <td className="text-left">
          <label className="px-7 py-4 block" htmlFor={`${_id}`}>
            <p className="w-80">{location}</p>
          </label>
        </td>
        <td className="text-left">
          <label className="px-7 py-4 block" htmlFor={`${_id}`}>
            <div>{duration}</div>
          </label>
        </td>
        <td className="text-left">
          <label className="px-7 py-4 block" htmlFor={`${_id}`}>
            <div>{session}</div>
          </label>
        </td>
        <td className="text-left">
          <label className="px-7 py-4 block" htmlFor={`${_id}`}>
            <div>{study_mode}</div>
          </label>
        </td>
        <td className="text-left">
          <label className="px-7 py-4 block" htmlFor={`${_id}`}>
            <div>{class_starts}</div>
          </label>
        </td>
        <td className="text-left">
          <label className="px-7 py-4 block" htmlFor={`${_id}`}>
            <div>
              <input
                onChange={(e) => setActive(e.target.value)}
                className="hidden peer"
                type="radio"
                name="course"
                value={`${_id}`}
                id={`${_id}`}
              />
              <div className="peer-checked:border-white border-text-900 h-6 w-6 border-2 rounded-full relative peer-checked:after:content-[''] after:absolute after:left-1 after:right-1 after:top-1 after:bottom-1 after:mx-auto peer-checked:after:border-[6px] peer-checked:after:border-white after:rounded-full"></div>
            </div>
          </label>
        </td>
      </tr>
    </>
  );
};

export default Tr;
