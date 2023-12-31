/*
 * Copyright (c) 2023. This product is copyright by Rian
 */

import SingleChatList from "./SingleChatList";

const ChatList = ({ chats }) => {
  return (
    <aside>
      <div className="px-[3.5vw] lg:px-7 h-14 flex items-center justify-between border-b">
        <h5 className="title text-2xl">Chat</h5>
        {/*<LuPenSquare className="text-2xl" />*/}
      </div>
      <div className="h-[calc(100vh-8.5rem)] overflow-y-auto py-4">
        <ul className="flex flex-col gap-4">
          {chats?.map((singleData, i) => (
            <li key={i}>
              <SingleChatList info={singleData} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ChatList;
