<<<<<<< HEAD
import Button from "@/components/Buttons/Button";
import { LuCalendar, LuTag } from "react-icons/lu";

const BlogCard = ({ data, position }) => {
  const { image_url, date, category, title } = data;
  return (
    <div
      className={`${
        position == "list" ? "flex-col sm:flex-row" : "flex-col"
=======
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
>>>>>>> update-project/main
      } w-full flex gap-4 items-center`}
    >
      <div
        className={`${
<<<<<<< HEAD
          position == "list" ? "w-full sm:w-1/2" : "w-full"
=======
          position === "list" ? "w-full sm:w-1/2" : "w-full"
>>>>>>> update-project/main
        } h-64  flex-shrink-0 rounded-xl overflow-hidden`}
      >
        <img
          className="w-full h-full object-cover bg-center"
<<<<<<< HEAD
          src={image_url}
=======
          src={`${urls?.blog}/${info?.attachment}`}
>>>>>>> update-project/main
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap gap-2 justify-between mb-4">
          <div className="flex items-center gap-2">
            <LuCalendar className="text-2xl" />
<<<<<<< HEAD
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuTag className="text-2xl" />
            <span>{category}</span>
          </div>
        </div>
        <h3 className="title  text-2xl mb-4">{title}</h3>
        <Button
=======
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
>>>>>>> update-project/main
          className={"btn-none flex items-center gap-1 text-secondary-500"}
          text={"Read More"}
          icon={<span className="material-icons-outlined !text-base">add</span>}
        />
      </div>
    </div>
  );
};

export default BlogCard;
