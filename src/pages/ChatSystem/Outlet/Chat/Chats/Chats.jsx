/*
 * Copyright (c) 2023-2024. This product is copyright by Rian
 */

import profileImg from "@/assets/images/profile.jpg";
import {useEffect, useRef, useState} from "react";
import {BiDotsVerticalRounded, BiPhone, BiVideo} from "react-icons/bi";
import {LuPaperclip, LuSendHorizonal} from "react-icons/lu";
import SingleChat from "./SingleChat";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useSelector} from "react-redux";
import {createMessage, fetchMessages,} from "@/pages/ChatSystem/requests/chatSystemApis.js";
import {urls} from "@/apis/config/urls.js";
import {toast} from "react-toastify";

// eslint-disable-next-line react/prop-types
const Chats = ({ socket }) => {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const { chat } = useSelector((state) => state.chat);
  const { data: messages, refetch } = useQuery({
    queryKey: ["messages", chat?._id],
    queryFn: () => fetchMessages(chat?._id),
    enabled: !!chat?._id,
    onSuccess: () => {
      queryClient.invalidateQueries(["chats"]);
    },
  });
  console.log(messages);
  // eslint-disable-next-line react/prop-types
  useEffect(() => {
    socket.on("chat message", (msg) => {
      if (msg) {
        refetch();
      }
    });
  }, []);
  const { mutateAsync } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      refetch();
    },
  });
  const handleSendMessage = async () => {
    try {
      // if (!content || !file) {
      //   return toast.warn(`Please type or select file`);
      // }
      const status = await mutateAsync({ content, chat: chat?._id, file });
      socket.emit("chat message", content);
      setContent("");
      setFile(null);
      toast.success(status?.message);
    } catch (e) {
      setContent("");
      setFile(null);
      toast.error(e.message);
    }
  };
  const chatBoxRef = useRef(null);
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat?._id]);
  return (
    <div>
      <div className="h-14 px-[3.5vw] lg:pl-7 lg:pr-[3.5vw] border-b flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-4">
          <span
            // onClick={() => setIsChatsShow(false)}
            className="material-icons-outlined cursor-pointer hover:text-secondary-500 lg:!hidden"
          >
            arrow_back
          </span>
          <img
            className="h-12 w-12 flex-shrink-0 object-cover object-center rounded-full"
            src={
              chat?.user?.photo
                ? `${urls?.user_photos}/${chat?.user?.photo}`
                : profileImg
            }
            alt=""
          />
          <h3 className="title text-xl">{chat?.user?.name}</h3>
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
        {messages?.map((chat, i) => (
          <SingleChat key={i} message={chat} />
        ))}
      </div>
      <div className="h-24 flex flex-col px-7 py-2 mb-4">
        <div>
          <textarea
            className="w-full px-4 py-2 text-sm outline-none rounded border focus-within:border-text-500"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            id="content"
            placeholder="Type a message"
          />
        </div>
        <div className="w-full h-full flex items-center justify-between text-text-300">
          <div className="flex items-center gap-2">
            <label className="hover:text-primary-500 text-xl">
              <input
                accept="image/*"
                onChange={(e) => {
                  setContent(e.target.files[0]?.name);
                  setFile(e.target.files[0]);
                }}
                type="file"
                className="hidden"
              />
              <LuPaperclip />
            </label>
          </div>
          <div className="hover:text-primary-500 text-2xl">
            <button onClick={handleSendMessage}>
              <LuSendHorizonal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
