import profileImg from "@/assets/images/profile.jpg";
import { format } from "date-fns";

const SingleChat = ({ chat, currentUser }) => {
  const { sender, content, timestamp } = chat;
  const isOpponent = sender?.username !== currentUser.username;
  return (
    <div
      className={`${
        isOpponent
          ? "justify-start mr-auto text-left"
          : "justify-end ml-auto text-right"
      } flex gap-2 items-end mb-4`}
    >
      {isOpponent && (
        <img
          className="h-7 w-7 flex-shrink-0 object-cover object-center rounded-full"
          src={profileImg}
          alt=""
        />
      )}
      <div>
        <div
          className={`${
            isOpponent
              ? "justify-start mr-auto text-left"
              : "justify-end ml-auto text-right"
          } flex gap-7 text-xs text-text-900 mb-1`}
        >
          {isOpponent && <h1 className="">{sender?.name}</h1>}
          <p>{format(new Date(timestamp), "dd/MM/yy HH:mm a")}</p>
        </div>
        <p className="px-2 py-1 rounded bg-input text-text-900 text-sm">
          {content}
        </p>
      </div>
    </div>
  );
};

export default SingleChat;
