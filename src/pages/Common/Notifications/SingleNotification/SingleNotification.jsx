/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import img from "@/assets/images/profile.jpg";
import {GoDotFill} from "react-icons/go";
import moment from "moment";
import {urls} from "@/apis/config/urls.js";

const SingleNotification = ({ item }) => {
  return (
    <li className="border-b py-7 flex items-start gap-2 text-sm">
      <GoDotFill className="text-primary-500 mt-[2px]" />
      <div className="flex-1">
        <p className="mb-4">
          Notification from{" "}
          <strong>
            {item?.sender[0]?.first_name} {item?.sender[0]?.last_name}
          </strong>
        </p>
        <div className="flex items-center gap-4">
          <img
            className="h-7 w-7 rounded-full"
            src={
              item?.sender[0]?.photo
                ? `${urls?.user_photos}/${item?.sender[0]?.photo}`
                : img
            }
            alt=""
          />
          <p>
            {item?.content}
            <GoDotFill className="text-xs inline-block" />{" "}
            {moment(new Date(item?.createdAt)).format("DD MMM yyyy, HH:MM a")}
          </p>
        </div>
      </div>
    </li>
  );
};

export default SingleNotification;
