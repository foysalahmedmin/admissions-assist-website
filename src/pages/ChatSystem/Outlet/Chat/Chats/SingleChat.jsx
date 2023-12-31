/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import profileImg from "@/assets/images/profile.jpg";
import {format} from "date-fns";
import {useSelector} from "react-redux";

const SingleChat = ({ message }) => {
  const { me, chat } = useSelector((state) => state.chat);
  const isOpponent = message?.sender !== me?._id;
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
          {isOpponent && <h1 className="">{chat?.user?.name}</h1>}
          <p>{format(new Date(message?.createdAt), "dd/MM/yy HH:mm a")}</p>
        </div>
        <p className="px-2 py-1 rounded bg-input text-text-900 text-sm">
          {message?.content}
        </p>
      </div>
    </div>
  );
};

export default SingleChat;
