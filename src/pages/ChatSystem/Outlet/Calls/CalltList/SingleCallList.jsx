import profileImg from "@/assets/images/profile.jpg";
import { BiPhone, BiVideo } from "react-icons/bi";

const SingleCallList = ({
  singleData,
  currentUser,
  displayCallHistories_Id,
  setDisplayCallHistories_Id,
  setIsCallHistoryShow,
}) => {
  const { id, participants } = singleData;
  const opponents = participants?.filter(
    (x) => x.username !== currentUser.username
  );
  return (
    <div
      onClick={() => {
        setDisplayCallHistories_Id(id);
        setIsCallHistoryShow(true);
      }}
      className={`${
        displayCallHistories_Id === id
          ? "bg-primary-500 bg-opacity-10"
          : "hover:bg-input"
      } py-2 px-[3.5vw] lg:px-7 cursor-pointer`}
    >
      <div className="w-full flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8 rounded-full object-cover object-center"
            src={profileImg}
            alt=""
          />
        </div>
        <div className="flex-1 flex items-center gap-4 justify-between">
          <div className="flex-1">
            <h3 className="text-text-900 font-semibold">
              {opponents[0]?.name}
            </h3>
          </div>
          <div className="flex justify-between items-center gap-4">
            <button className="rounded-full h-8 w-8 flex items-center justify-center bg-primary-500 bg-opacity-10 text-primary-500">
              <BiVideo className="text-xl" />
            </button>
            <button className="rounded-full h-8 w-8 flex items-center justify-center bg-primary-500 bg-opacity-10 text-primary-500">
              <BiPhone className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCallList;
