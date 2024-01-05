/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import {BiCalendarAlt, BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin,} from "react-icons/bi";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchOneBlog} from "@/pages/Common/Blogs/requests/blogApis.js";
import {urls} from "@/apis/config/urls.js";
import moment from "moment";
import parse from "html-react-parser";
import "./style.css";

const Contents = () => {
  const { id } = useParams();
  const { data: blog } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchOneBlog(id),
    enabled: !!id,
  });
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full mb-7">
          <img
            className="w-full h-[55vw] lg:h-[35vw] xl:h-[45rem] rounded-xl object-cover object-center"
            src={`${urls?.blog}/${blog?.attachment}`}
            alt=""
          />
        </div>
        <div className="flex gap-4 text-text-900 mb-7">
          <div className="flex items-center gap-2">
            <BiCalendarAlt className="text-2xl text-primary-500" />
            <span>
              {moment(new Date(blog?.createdAt)).format("dd, MMMM, yyyy")}
            </span>
          </div>
          {/*<div className="w-[1px] bg-text-900"></div>*/}
          {/*<div className="flex items-center gap-2">*/}
          {/*  <BiMessageSquareDetail className="text-2xl text-primary-500" />*/}
          {/*  <span>5 Comment</span>*/}
          {/*</div>*/}
        </div>
        <div className="mb-7">
          <h3 className="title text-3xl mb-7">{blog?.title}</h3>
          <p>{blog?.description}</p>
        </div>
        <div className="mb-7">{parse(`${blog?.content}`)}</div>
        <hr className="my-7" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-text-300">Tags:</span>
            <p className="text-text-900">
              {blog?.country?._id && <span>#{blog?.country?.name}</span>}{" "}
              {blog?.city?.length > 0 && <span>#{blog?.city[0]?.name}</span>}{" "}
              {blog?.university?.length > 0 && (
                <span>#{blog?.university[0]?.name}</span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-text-300">Share:</span>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded border border-primary-500 text-primary-500 flex items-center justify-center cursor-pointer">
                <BiLogoFacebook className="text-xl" />
              </div>
              <div className="h-7 w-7 rounded border border-primary-500 text-primary-500 flex items-center justify-center cursor-pointer">
                <BiLogoLinkedin className="text-xl" />
              </div>
              <div className="h-7 w-7 rounded border border-primary-500 text-primary-500 flex items-center justify-center cursor-pointer">
                <BiLogoInstagramAlt className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
