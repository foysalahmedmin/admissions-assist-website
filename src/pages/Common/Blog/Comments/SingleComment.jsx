import { BiTimeFive } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const SingleComment = ({ data, className }) => {
  const { name, image_url, time, comment, replies } = data;
  return (
    <>
      <div>
        <div
          className={twMerge(
            "flex flex-col md:flex-row gap-7 py-4 border-b",
            className
          )}
        >
          <div className="hidden md:block flex-shrink-0 h-24 w-24 rounded-full overflow-hidden bg-line p-1">
            <img
              className="h-full w-full object-cover object-center rounded-full"
              src={image_url}
              alt=""
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="md:hidden flex-shrink-0 h-14 w-14 rounded-full overflow-hidden bg-line p-1">
                  <img
                    className="h-full w-full object-cover object-center rounded-full"
                    src={image_url}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="title text-2xl md:mb-2">{name}</h3>
                  <div className="flex items-center gap-2">
                    <BiTimeFive className="text-xl text-primary" />
                    <span className="text-sm text-title">{time}</span>
                  </div>
                </div>
              </div>
              <button className="hidden md:block ghost-btn outline outline-1 h-7 outline-line">
                Reply
              </button>
            </div>
            <div>
              <p>{comment}</p>
            </div>
            <button className="md:hidden ghost-btn outline outline-1 h-7 outline-line ml-auto mt-4">
              Reply
            </button>
          </div>
        </div>
      </div>
      {replies && (
        <div className="grid grid-cols-1">
          {replies.map((data, i) => (
            <SingleComment key={i} data={data} className={"pl-12"} />
          ))}
        </div>
      )}
    </>
  );
};

export default SingleComment;
