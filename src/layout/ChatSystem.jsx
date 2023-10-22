import Sidebar from "@/pages/ChatSystem/Sidebar/Sidebar";
import TopSearch from "@/pages/ChatSystem/TopSearch/TopSearch";
import Footer from "@/pages/Footer/Footer/Footer";
import Header from "@/pages/Header/Header/Header";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ChatSystem = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/chat_system/chat");
  }, []);
  return (
    <>
      <Header navigationClassName={"px-[3.5%]"} />
      <main>
        <TopSearch />
        <div>
          <div className="flex flex-col lg:flex-row">
            <aside className="py-4 lg:py-14 lg:w-40 xl:min-w-[15rem] border-b lg:border-r">
              <Sidebar />
            </aside>
            <section className="flex-1">
              <Outlet />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ChatSystem;
