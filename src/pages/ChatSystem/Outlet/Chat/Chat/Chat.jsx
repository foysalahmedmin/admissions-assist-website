<<<<<<< HEAD
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
=======
/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import ChatList from "../ChatList/ChatList";
import {useQuery} from "react-query";
import {fetchMe, fetchStudentChats,} from "@/pages/ChatSystem/requests/chatSystemApis.js";
import {useDispatch, useSelector} from "react-redux";
import {SetChat, SetMe} from "@/redux/chatSlice/chatSlice.js";
import Chats from "@/pages/ChatSystem/Outlet/Chat/Chats/Chats.jsx";
import {io} from "socket.io-client";

const socket = io("ws://chat.admissionsassist.com", {
  transports: ["websocket", "polling"],
});

const Chat = () => {
  const { isSelected, me } = useSelector((state) => state.chat);
  socket.emit("setup", me?._id);
  const dispatch = useDispatch();
  const { _ } = useQuery({
    queryKey: ["fetch_me"],
    queryFn: () => fetchMe(),
    onSuccess: (output) => {
      dispatch(SetMe(output));
    },
  });
  const { data: chats } = useQuery({
    queryKey: ["chats"],
    queryFn: () => fetchStudentChats(),
    onSuccess: (output) => {
      if (output?.length > 0) {
        socket.emit("join chat", output[0]?._id);
        dispatch(SetChat(output[0]));
      }
    },
  });
>>>>>>> update-project/main
  return (
    <div className="flex">
      <div
        className={`${
<<<<<<< HEAD
          !isChatsShow ? "w-full lg:w-[25rem]" : "w-0 lg:w-[25rem]"
        }  lg:border-r overflow-hidden transition-all`}
      >
        <ChatList
          chatListData={chatListData}
          currentUser={currentUser}
          displayChats_Id={displayChats_Id}
          setDisplayChats_Id={setDisplayChats_Id}
          setIsChatsShow={setIsChatsShow}
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
=======
          !isSelected ? "w-full lg:w-[25rem]" : "w-0 lg:w-[25rem]"
        }  lg:border-r overflow-hidden transition-all`}
      >
        <ChatList chats={chats} />
      </div>
      <div className={`${isSelected ? "block" : "hidden lg:block"} flex-1`}>
        <Chats socket={socket} />
>>>>>>> update-project/main
      </div>
    </div>
  );
};

export default Chat;
