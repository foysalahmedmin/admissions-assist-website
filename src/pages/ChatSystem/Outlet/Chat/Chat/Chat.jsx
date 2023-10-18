import ChatList from "../ChatList/ChatList";

const Chat = () => {
  return (
    <div className="flex">
      <div className="w-80 border-r">
        <ChatList />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Chat;
