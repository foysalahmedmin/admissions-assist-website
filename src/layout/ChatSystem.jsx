import Sidebar from "@/pages/ChatSystem/Sidebar/Sidebar";
import TopSearch from "@/pages/ChatSystem/TopSearch/TopSearch";
import { Outlet } from "react-router-dom";

const ChatSystem = () => {
  return (
    <main>
      <TopSearch />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <aside className="py-4 lg:py-14 lg:w-40 xl:w-60 border-b lg:border-r">
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
