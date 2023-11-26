import { LuSettings } from "react-icons/lu";
import SingleNotification from "../SingleNotification/SingleNotification";

const Contents = () => {
  return (
    <section className="container mx-auto py-14">
      <div className="bg-white rounded-xl shadow-custom p-7">
        <div className="px-7 py-2 bg-background w-full flex flex-wrap items-center justify-between gap-7 rounded-xl text-xs mb-7">
          <div>
            🔔 <strong>Turn on push notifications</strong> to know when your
            video has been watched and interacted with.
          </div>
          <div>
            <button className="py-2 px-4 rounded-full border hover:border-text-900 text-text-900 font-semibold">
              Allow push notifications
            </button>
            <button className="py-2 px-4 text-text-900 font-semibold">
              Dismiss
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-7 mb-7">
            <h3 className="text-xl lg:text-2xl font-bold text-text-900">
              Notifications
            </h3>
            <LuSettings className="text-2xl" />
          </div>
          <div>
            <ul>
              <SingleNotification />
              <SingleNotification />
              <SingleNotification />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
