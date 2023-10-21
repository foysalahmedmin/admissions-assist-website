import {
  LuCalendarCheck,
  LuFile,
  LuMessagesSquare,
  LuPhoneCall,
  LuVolume2,
} from "react-icons/lu";
import ChatActiveLink from "./ChatActiveLink";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex lg:flex-col items-start gap-4 text-labels">
        <ChatActiveLink to={"/student/chat"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuMessagesSquare className="text-2xl" />
              <span className="font-semibold hidden lg:block">Chat</span>
            </div>
          </li>
        </ChatActiveLink>
        <ChatActiveLink to={"/student/chat/files"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuFile className="text-2xl" />
              <span className="font-semibold hidden lg:block">Files</span>
            </div>
          </li>
        </ChatActiveLink>
        <ChatActiveLink to={"/student/chat/calendar"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuCalendarCheck className="text-2xl" />
              <span className="font-semibold hidden lg:block">Calendar</span>
            </div>
          </li>
        </ChatActiveLink>
        <ChatActiveLink to={"/student/chat/feedback"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuPhoneCall className="text-2xl" />
              <span className="font-semibold hidden lg:block">Calls</span>
            </div>
          </li>
        </ChatActiveLink>
      </ul>
    </div>
  );
};

export default Sidebar;
