import profileImg from "@/assets/images/profile.jpg";
import { useEffect, useRef } from "react";
import { BiDotsVerticalRounded, BiPhone, BiVideo } from "react-icons/bi";
import {
  LuCalendarPlus,
  LuPaperclip,
  LuSendHorizonal,
  LuSmile,
} from "react-icons/lu";
import SingleChat from "./SingleChat";

const Chats = ({
  displayChats,
  displayChats_Id,
  DisplayParticipants,
  currentUser,
  setIsChatsShow,
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
      <div className="h-14 px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] border-b flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          <span
            onClick={() => setIsChatsShow(false)}
            className="material-icons-outlined cursor-pointer hover:text-secondary-500 lg:!hidden"
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
          <button className="rounded-full h-8 w-8 flex items-center justify-center bg-primary-500 bg-opacity-10 text-primary-500">
            <BiVideo className="text-2xl" />
          </button>
          <button className="rounded-full h-8 w-8 flex items-center justify-center bg-primary-500 bg-opacity-10 text-primary-500">
            <BiPhone className="text-xl" />
          </button>
          <button className="rounded-full h-8 w-8 flex items-center justify-center">
            <BiDotsVerticalRounded className="text-2xl" />
          </button>
        </div>
      </div>
      <div
        ref={chatBoxRef}
        className="h-[calc(100vh-14.5rem)] overflow-y-auto px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] py-4"
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
            className="w-full px-4 py-2 text-sm outline-none rounded border focus-within:border-text-500"
            type="text"
            name="content"
            id="content"
            placeholder="Type a message"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between text-text-300">
          <div className="flex items-center gap-2">
            <button className="hover:text-primary-500 text-xl">
              <LuPaperclip />
            </button>
            <button className="hover:text-primary-500 text-xl">
              <LuCalendarPlus />
            </button>
            <button className="hover:text-primary-500 text-xl">
              <LuSmile />
            </button>
          </div>
          <div className="hover:text-primary-500 text-2xl">
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
