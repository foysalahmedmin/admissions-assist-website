import Sidebar from "@/pages/ChatSystem/Sidebar/Sidebar";
import TopSearch from "@/pages/ChatSystem/TopSearch/TopSearch";
import { Outlet } from "react-router-dom";

const ChatSystem = () => {
  return (
    <main>
      <TopSearch />
      <div className="container mx-auto">
        <div className="flex">
          <aside className="py-14 w-40 border-r">
            <Sidebar />
          </aside>
          <section className="flex-1">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
};

export default ChatSystem;
