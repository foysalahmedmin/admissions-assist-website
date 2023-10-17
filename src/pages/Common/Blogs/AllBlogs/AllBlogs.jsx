import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import usePagination from "@/hooks/usePagination/usePagination";
import cardImg from "@/assets/images/university-slide-1.png";
import BlogCard from "@/components/Cards/BlogCard/BlogCard";
import { LuGrip, LuList } from "react-icons/lu";

const AllBlogs = () => {
  const [cards, setCards] = useState(Array.from(Array(26).keys()));
  const [position, setPosition] = useState("grip");
  const {
    setTotal,
    setLimit,
    setPageNumber,
    previousHandle,
    nextHandle,
    limit,
    pageQuantity,
    pageNumber,
  } = usePagination();
  useEffect(() => {
    if (cards) {
      setTotal(cards.length);
      setLimit(12);
    }
  }, [cards]);
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-end gap-4 lg:gap-7">
            <button
              onClick={() => setPosition("list")}
              className={`${
                position == "list" ? "text-primary" : ""
              } ghost-btn px-0 py-0 text-3xl lg:text-5xl`}
            >
              <LuList />
            </button>
            <button
              onClick={() => setPosition("grip")}
              className={`${
                position == "grip" ? "text-primary" : ""
              } ghost-btn px-0 py-0 text-3xl lg:text-5xl`}
            >
              <LuGrip />
            </button>
          </div>
        </div>
        <div
          className={`${
            position == "list" ? "xl:grid-cols-2" : " md:grid-cols-2 lg:grid-cols-3"
          } grid gap-7 mb-12`}
        >
          {cards
            .slice(pageNumber * limit, pageNumber * limit + limit)
            .map((x) => (
              <BlogCard
                key={x}
                position={position}
                data={{
                  image_url: cardImg,
                  date: "02 September, 2023",
                  category: "Development",
                  tag: ["Development"],
                  title: `Overseas Education Fair Amravation 2023`,
                  text: "Fill in your personal information, academic background, desired courses, and preferences.",
                }}
              />
            ))}
        </div>
        <div>
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            pageQuantity={pageQuantity}
            previousHandle={previousHandle}
            nextHandle={nextHandle}
          />
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
