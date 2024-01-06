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
  return (
    <div className="flex">
      <div
        className={`${
          !isSelected ? "w-full lg:w-[25rem]" : "w-0 lg:w-[25rem]"
        }  lg:border-r overflow-hidden transition-all`}
      >
        <ChatList chats={chats} />
      </div>
      <div className={`${isSelected ? "block" : "hidden lg:block"} flex-1`}>
        <Chats socket={socket} />
      </div>
    </div>
  );
};

export default Chat;
