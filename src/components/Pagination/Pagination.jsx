import { useDispatch, useSelector } from "react-redux";
import { SetPage } from "@/redux/tableSlice/tableSlice.js";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, limit, total } = useSelector((state) => state.table);
  return (
    <div className="w-full flex gap-4 flex-col md:flex-row justify-between items-center">
      <div />
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(SetPage(page - 1))}
          className="ghost-btn text-secondary-500"
          disabled={page === 1}
        >
          <span className="material-icons"> keyboard_arrow_left</span>
        </button>
        <div className="flex gap-3 justify-center items-center">
          {Array.from({
            length: Math.ceil(total / limit) || 1,
          }).map((x, index) => (
            <button
              onClick={() => dispatch(SetPage(index + 1))}
              className={`h-7 w-7 flex items-center justify-center rounded-full border border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500 cursor-pointer ${
                page === index + 1 && "text-white bg-secondary-500"
              }`}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          disabled={page === Math.ceil(limit / total)}
          onClick={() => dispatch(SetPage(page + 1))}
          className="ghost-btn text-secondary-500"
        >
          <span className="material-icons"> keyboard_arrow_right</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
