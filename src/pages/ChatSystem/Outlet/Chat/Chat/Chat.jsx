import { useEffect, useState } from "react";
import ChatList from "../ChatList/ChatList";
import { chat_list } from "@/assets/data/chat_list/chat_list";
import Chats from "../Chats/Chats";
import { chats } from "@/assets/data/chats/chats";

const Chat = () => {
  const currentUser = {
    name: "Min",
    username: "min01",
  };
  const [chatListData, setChatListData] = useState([]);
  const [displayChats, setDisplayChats] = useState([]);
  const [DisplayParticipants, setDisplayParticipants] = useState([]);
  const [displayChats_Id, setDisplayChats_Id] = useState("1");
  const [isChatsShow, setIsChatsShow] = useState(false);
  useEffect(() => {
    if (chat_list) {
      const current_chat_list = chat_list.filter(
        (c, i) =>
          c.participants[0].username === currentUser.username ||
          c.participants[1].username === currentUser.username
      );
      setChatListData(current_chat_list);
    }
  }, [currentUser.username]);
  useEffect(() => {
    if (chats && chat_list) {
      const display_chats = chats.filter(
        (chat) => chat?.chat === displayChats_Id
      );
      const display_participants = chat_list.find(
        (chat) => chat.id == displayChats_Id
      )?.participants;
      setDisplayChats(display_chats);
      setDisplayParticipants(display_participants);
    }
  }, [displayChats_Id]);
  return (
    <div className="flex">
      <div
        className={`${
          !isChatsShow ? "w-full lg:w-[25rem]" : "w-0 lg:w-[25rem]"
        }  lg:border-r transition-all`}
      >
        <ChatList
          chatListData={chatListData}
          currentUser={currentUser}
          setDisplayChats_Id={setDisplayChats_Id}
        />
      </div>
      <div className={`${isChatsShow ? "block" : "hidden lg:block"} flex-1`}>
        <Chats
          displayChats_Id={displayChats_Id}
          displayChats={displayChats}
          currentUser={currentUser}
          DisplayParticipants={DisplayParticipants}
          setIsChatsShow={setIsChatsShow}
        />
      </div>
    </div>
  );
};

export default Chat;
