import { LuPenSquare } from "react-icons/lu";

const ChatList = () => {
  return (
    <aside>
      <div className="px-7 pt-7 pb-4 flex items-center justify-between border-b">
        <h5 className="title text-2xl">Chat</h5>
        <LuPenSquare className="text-2xl" />
      </div>
    </aside>
  );
};

export default ChatList;
