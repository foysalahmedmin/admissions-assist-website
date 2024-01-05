/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import BlogCard from "@/components/Cards/BlogCard/BlogCard";
import Pagination from "@/components/Pagination/Pagination";
import {useState} from "react";
import {LuGrip, LuList} from "react-icons/lu";
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "react-query";
import {fetchBlogs} from "@/pages/Common/Blogs/requests/blogApis.js";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const { page, limit, search } = useSelector((state) => state.table);
  const { isLoading, data: blogs } = useQuery({
    queryKey: ["blogs", page, limit, search],
    queryFn: () => fetchBlogs(page, limit, search),
  });
  const [position, setPosition] = useState("grip");
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-end gap-4 lg:gap-7">
            <button
              onClick={() => setPosition("list")}
              className={`${
                position === "list" ? "text-primary-500" : ""
              } ghost-btn px-0 py-0 text-3xl lg:text-5xl`}
            >
              <LuList />
            </button>
            <button
              onClick={() => setPosition("grip")}
              className={`${
                position === "grip" ? "text-primary-500" : ""
              } ghost-btn px-0 py-0 text-3xl lg:text-5xl`}
            >
              <LuGrip />
            </button>
          </div>
        </div>
        <div
          className={`${
            position === "list"
              ? "xl:grid-cols-2"
              : " md:grid-cols-2 lg:grid-cols-3"
          } grid gap-7 mb-12`}
        >
          {blogs?.data?.map((x, i) => (
            <BlogCard key={i} position={position} info={x} />
          ))}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
