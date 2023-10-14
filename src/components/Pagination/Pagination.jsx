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
        <button onClick={previousHandle} className="ghost-btn text-secondary">
          <span className="material-icons"> keyboard_arrow_left</span>
        </button>
        <div className="flex gap-3 justify-center items-center">
          {Array.from({
            length: pageQuantity,
          }).map((x, index) => (
            <button
              onClick={() => setPageNumber(index)}
              className={`h-7 w-7 flex items-center justify-center rounded-full border border-secondary text-secondary hover:text-white hover:bg-secondary cursor-pointer ${
                pageNumber == index && "text-white bg-secondary"
              }`}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={nextHandle} className="ghost-btn text-secondary">
          <span className="material-icons"> keyboard_arrow_right</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
