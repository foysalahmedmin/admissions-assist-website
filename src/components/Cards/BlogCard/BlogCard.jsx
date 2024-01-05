/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import Button from "@/components/Buttons/Button";
import {LuCalendar, LuTag} from "react-icons/lu";
import {urls} from "@/apis/config/urls.js";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const BlogCard = ({ info, position }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        position === "list" ? "flex-col sm:flex-row" : "flex-col"
      } w-full flex gap-4 items-center`}
    >
      <div
        className={`${
          position === "list" ? "w-full sm:w-1/2" : "w-full"
        } h-64  flex-shrink-0 rounded-xl overflow-hidden`}
      >
        <img
          className="w-full h-full object-cover bg-center"
          src={`${urls?.blog}/${info?.attachment}`}
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap gap-2 justify-between mb-4">
          <div className="flex items-center gap-2">
            <LuCalendar className="text-2xl" />
            <span>
              {moment(new Date(info?.createdAt)).format("dd, MMMM, yyyy")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LuTag className="text-2xl" />
            <span>{info?.writer?.name}</span>
          </div>
        </div>
        <h3 className="title  text-2xl mb-4">{info?.title}</h3>
        <Button
          onClick={() => navigate(`/blog/${info?._id}`)}
          className={"btn-none flex items-center gap-1 text-secondary-500"}
          text={"Read More"}
          icon={<span className="material-icons-outlined !text-base">add</span>}
        />
      </div>
    </div>
  );
};

export default BlogCard;
