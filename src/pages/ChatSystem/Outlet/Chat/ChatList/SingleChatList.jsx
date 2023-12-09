import profileImg from "@/assets/images/profile.jpg";
import { format } from "date-fns";

const SingleChatList = ({
  singleData,
  currentUser,
  displayChats_Id,
  setDisplayChats_Id,
  setIsChatsShow,
}) => {
  const {
    id,
    participants,
    lastMessage,
    lastMessageSenderUsername,
    lastMessageTimestamp,
    lastReaders,
    favorite,
  } = singleData;
  const opponents = participants?.filter(
    (x) => x.username !== currentUser.username
  );
  return (
    <div
      onClick={() => {
        setDisplayChats_Id(id);
        setIsChatsShow(true);
      }}
      className={`${
        displayChats_Id === id
          ? "bg-primary-500 bg-opacity-10"
          : "hover:bg-input"
      } py-2 px-[3.5vw] lg:px-7 cursor-pointer`}
    >
      <div className="w-full flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full object-cover object-center"
            src={profileImg}
            alt=""
          />
        </div>
        <div className="flex-1 flex items-center gap-4 justify-between">
          <div className="flex-1">
            <h3 className="text-text-900 font-semibold">
              {opponents[0]?.name}
            </h3>
            <p className="text-xs">
              {lastMessageSenderUsername === currentUser.username && (
                <span>You:</span>
              )}{" "}
              {lastMessage}
            </p>
          </div>
          <div>{format(new Date(lastMessageTimestamp), "HH:mm")}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleChatList;
