<<<<<<< HEAD
const Pagination = ({
  setPageNumber,
  pageNumber,
  pageQuantity,
  previousHandle,
  nextHandle,
}) => {
  return (
    <div className="w-full flex gap-4 flex-col md:flex-row justify-between items-center">
      <div>
        {/* <p>
          {pageNumber + 1} - {pageQuantity} of {total} Items
        </p> */}
      </div>
      <div className="flex gap-4">
        <button
          onClick={previousHandle}
          className="ghost-btn text-secondary-500"
=======
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
>>>>>>> update-project/main
        >
          <span className="material-icons"> keyboard_arrow_left</span>
        </button>
        <div className="flex gap-3 justify-center items-center">
          {Array.from({
<<<<<<< HEAD
            length: pageQuantity,
          }).map((x, index) => (
            <button
              onClick={() => setPageNumber(index)}
              className={`h-7 w-7 flex items-center justify-center rounded-full border border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500 cursor-pointer ${
                pageNumber == index && "text-white bg-secondary-500"
=======
            length: Math.ceil(total / limit) || 1,
          }).map((x, index) => (
            <button
              onClick={() => dispatch(SetPage(index + 1))}
              className={`h-7 w-7 flex items-center justify-center rounded-full border border-secondary-500 text-secondary-500 hover:text-white hover:bg-secondary-500 cursor-pointer ${
                page === index + 1 && "text-white bg-secondary-500"
>>>>>>> update-project/main
              }`}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
<<<<<<< HEAD
        <button onClick={nextHandle} className="ghost-btn text-secondary-500">
=======
        <button
          disabled={page === Math.ceil(limit / total)}
          onClick={() => dispatch(SetPage(page + 1))}
          className="ghost-btn text-secondary-500"
        >
>>>>>>> update-project/main
          <span className="material-icons"> keyboard_arrow_right</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
