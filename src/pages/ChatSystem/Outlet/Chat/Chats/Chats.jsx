import {
  LuCalendarPlus,
  LuPaperclip,
  LuSendHorizonal,
  LuSmile,
} from "react-icons/lu";
import SingleChat from "./SingleChat";
import profileImg from "@/assets/images/profile.jpg";
import { BiDotsVerticalRounded, BiPhone, BiVideo } from "react-icons/bi";
import { useEffect, useRef } from "react";

const Chats = ({
  displayChats,
  displayChats_Id,
  DisplayParticipants,
  currentUser,
  setIsChatsShow
}) => {
  const opponents = DisplayParticipants?.filter(
    (x) => x.username !== currentUser.username
  );
  const chatBoxRef = useRef(null);
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [displayChats, displayChats_Id]);
  return (
    <div>
      <div className="h-14 px-7 border-b flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          <span
            onClick={() => setIsChatsShow(false)}
            className="material-icons-outlined cursor-pointer hover:text-secondary lg:!hidden"
          >
            arrow_back
          </span>
          <img
            className="h-12 w-12 flex-shrink-0 object-cover object-center rounded-full"
            src={profileImg}
            alt=""
          />
          <h3 className="title text-xl">{opponents[0]?.name}</h3>
        </div>
        <div className="flex justify-between items-center gap-2 lg:gap-4">
          <button className="rounded-full h-8 w-8 flex items-center justify-center bg-primary bg-opacity-10 text-primary">
            <BiVideo className="text-2xl" />
          </button>
          <button className="rounded-full h-8 w-8 flex items-center justify-center bg-primary bg-opacity-10 text-primary">
            <BiPhone className="text-xl" />
          </button>
          <button className="rounded-full h-8 w-8 flex items-center justify-center">
            <BiDotsVerticalRounded className="text-2xl" />
          </button>
        </div>
      </div>
      <div
        ref={chatBoxRef}
        className="h-[calc(100vh-14.5rem)] overflow-y-auto px-7 py-4"
      >
        {displayChats.map((chat, i) => (
          <SingleChat
            key={i}
            chat={chat}
            currentUser={currentUser}
            opponents={opponents}
          />
        ))}
      </div>
      <div className="h-24 flex flex-col px-7 py-2">
        <div>
          <input
            className="w-full px-4 py-2 text-sm outline-none rounded border focus-within:border-text"
            type="text"
            name="content"
            id="content"
            placeholder="Type a message"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between text-labels">
          <div className="flex items-center gap-2">
            <button className="hover:text-primary text-xl">
              <LuPaperclip />
            </button>
            <button className="hover:text-primary text-xl">
              <LuCalendarPlus />
            </button>
            <button className="hover:text-primary text-xl">
              <LuSmile />
            </button>
          </div>
          <div className="hover:text-primary text-2xl">
            <button>
              <LuSendHorizonal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
