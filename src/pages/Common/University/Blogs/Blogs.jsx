/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import BlogCard from "../../../../components/Cards/BlogCard/BlogCard";
import { useQuery } from "react-query";
import { fetchLatestBlogs } from "@/pages/Common/Blogs/requests/blogApis.js";

const Blogs = () => {
  const { data: blogs } = useQuery({
    queryKey: ["latest_blogs"],
    queryFn: () => fetchLatestBlogs(),
  });
  return (
    <section className="lg:py-24 py-14 bg-primary-500 bg-opacity-10" id="blogs">
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"Our Blogs"}
          title={`Insights & Tips from the Experts`}
          text={`Dive deep into the world of UK education through our curated articles, guides, and student stories`}
        />
        <div>
          <div className="grid lg:grid-cols-3 gap-7">
            {blogs?.map((data, i) => (
              <BlogCard key={i} info={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
