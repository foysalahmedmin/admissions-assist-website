<<<<<<< HEAD
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
=======
/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import profileImg from "@/assets/images/profile.jpg";
import {format} from "date-fns";
import {useDispatch, useSelector} from "react-redux";
import {ToggleSelected} from "@/redux/chatSlice/chatSlice.js";
import {urls} from "@/apis/config/urls.js";

// eslint-disable-next-line react/prop-types
const SingleChatList = ({ info }) => {
  const dispatch = useDispatch();
  const { chat } = useSelector((state) => state.chat);
  return (
    <div
      onClick={() => {
        dispatch(ToggleSelected());
      }}
      className={`${
        info?._id === chat?._id
>>>>>>> update-project/main
          ? "bg-primary-500 bg-opacity-10"
          : "hover:bg-input"
      } py-2 px-[3.5vw] lg:px-7 cursor-pointer`}
    >
      <div className="w-full flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full object-cover object-center"
<<<<<<< HEAD
            src={profileImg}
=======
            src={
              chat?.user?.photo
                ? `${urls?.user_photos}/${chat?.user?.photo}`
                : profileImg
            }
>>>>>>> update-project/main
            alt=""
          />
        </div>
        <div className="flex-1 flex items-center gap-4 justify-between">
          <div className="flex-1">
<<<<<<< HEAD
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
=======
            <h3 className="text-text-900 font-semibold">{chat?.user?.name}</h3>
            <p className="text-xs">{chat?.latestMessage?.content}</p>
          </div>
          <div>
            {format(new Date(chat?.latestMessage?.createdAt), "HH:MM a")}
          </div>
>>>>>>> update-project/main
        </div>
      </div>
    </div>
  );
};

export default SingleChatList;
