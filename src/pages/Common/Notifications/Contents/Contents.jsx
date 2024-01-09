<<<<<<< HEAD
import { LuSettings } from "react-icons/lu";
import SingleNotification from "../SingleNotification/SingleNotification";

const Contents = () => {
=======
/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import {LuSettings} from "react-icons/lu";
import SingleNotification from "../SingleNotification/SingleNotification";
import {useMutation, useQuery} from "react-query";
import {fetchStudentPending, markReadPending,} from "@/network/notification.js";
import {toast} from "react-toastify";

const Contents = () => {
  const { data } = useQuery({
    queryKey: ["all_pending"],
    queryFn: () => fetchStudentPending(),
  });
  const { mutateAsync } = useMutation({
    mutationFn: markReadPending,
  });
>>>>>>> update-project/main
  return (
    <section className="container mx-auto py-14">
      <div className="bg-white rounded-xl shadow-custom p-7">
        <div className="px-7 py-2 bg-background w-full flex flex-wrap items-center justify-between gap-7 rounded-xl text-xs mb-7">
          <div>
<<<<<<< HEAD
            🔔 <strong>Turn on push notifications</strong> to know when your
            video has been watched and interacted with.
          </div>
          <div>
            <button className="py-2 px-4 rounded-full border hover:border-text-900 text-text-900 font-semibold">
              Allow push notifications
            </button>
            <button className="py-2 px-4 text-text-900 font-semibold">
              Dismiss
=======
            🔔 <strong>To mark as read all notification</strong> click on mark
            read button.
          </div>
          <div>
            <button
              onClick={async () => {
                const status = await mutateAsync();
                toast.success(status?.message);
              }}
              className="py-2 px-4 rounded-full border hover:border-text-900 text-text-900 font-semibold"
            >
              Mark Read
>>>>>>> update-project/main
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
<<<<<<< HEAD
              <SingleNotification />
              <SingleNotification />
              <SingleNotification />
=======
              {data?.length > 0 ? (
                data?.map((item, i) => (
                  <SingleNotification key={i} item={item} />
                ))
              ) : (
                <li className="text-sm text-primary-500 w-auto">
                  No notification found!
                </li>
              )}
>>>>>>> update-project/main
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
