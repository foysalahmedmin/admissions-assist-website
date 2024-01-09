<<<<<<< HEAD
import {
  LuCalendarCheck,
  LuFile,
  LuMessagesSquare,
  LuPhoneCall,
} from "react-icons/lu";
=======
/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import { LuCalendarCheck, LuFile, LuMessagesSquare } from "react-icons/lu";
>>>>>>> update-project/main
import ChatActiveLink from "./ChatActiveLink";

const Sidebar = () => {
  return (
    <div>
      <ul className="px-[3.5vw] lg:px-0 flex lg:flex-col items-start justify-center lg:justify-start gap-4 text-text-300">
        <ChatActiveLink to={"/chat_system/chat"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuMessagesSquare className="text-2xl" />
              <span className="font-semibold hidden lg:block">Chat</span>
            </div>
          </li>
        </ChatActiveLink>
        <ChatActiveLink to={"/chat_system/files"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuFile className="text-2xl" />
              <span className="font-semibold hidden lg:block">Files</span>
            </div>
          </li>
        </ChatActiveLink>
        <ChatActiveLink to={"/chat_system/calendar"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuCalendarCheck className="text-2xl" />
              <span className="font-semibold hidden lg:block">Calendar</span>
            </div>
          </li>
        </ChatActiveLink>
<<<<<<< HEAD
        <ChatActiveLink to={"/chat_system/calls"}>
          <li>
            <div className="flex items-center gap-4 py-1">
              <LuPhoneCall className="text-2xl" />
              <span className="font-semibold hidden lg:block">Calls</span>
            </div>
          </li>
        </ChatActiveLink>
=======
        {/*<ChatActiveLink to={"/chat_system/calls"}>*/}
        {/*  <li>*/}
        {/*    <div className="flex items-center gap-4 py-1">*/}
        {/*      <LuPhoneCall className="text-2xl" />*/}
        {/*      <span className="font-semibold hidden lg:block">Calls</span>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*</ChatActiveLink>*/}
>>>>>>> update-project/main
      </ul>
    </div>
  );
};

export default Sidebar;
