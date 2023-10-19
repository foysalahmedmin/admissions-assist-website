import { LuPenSquare } from "react-icons/lu";
import SingleChatList from "./SingleChatList";

const ChatList = ({ chatListData, currentUser, setDisplayChats_Id }) => {
  return (
    <aside>
      <div className="px-7 h-14 flex items-center justify-between border-b">
        <h5 className="title text-2xl">Chat</h5>
        <LuPenSquare className="text-2xl" />
      </div>
      <div className="h-[calc(100vh-8.5rem)] overflow-y-auto py-4">
        <ul className="flex flex-col gap-4">
          {chatListData.map((singleData, i) => (
            <li key={i}>
              <SingleChatList singleData={singleData} currentUser={currentUser} setDisplayChats_Id={setDisplayChats_Id}/>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ChatList;
