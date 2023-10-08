import Button from "@/components/Buttons/Button";
import { LuCalendar, LuTag } from "react-icons/lu";

const BlogCard = ({ data }) => {
  const { image_url, date, category, title } = data;
  return (
    <div>
      <div className="mb-4 h-64 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover bg-center"
          src={image_url}
          alt=""
        />
      </div>
      <div>
        <div className="flex flex-wrap gap-2 justify-between mb-4">
          <div className="flex items-center gap-2">
            <LuCalendar className="text-2xl" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuTag className="text-2xl" />
            <span>{category}</span>
          </div>
        </div>
        <h3 className="title  text-2xl mb-4">{title}</h3>
        <Button
          className={"btn-none flex items-center gap-1 text-secondary"}
          text={"Read More"}
          icon={<span className="material-icons-outlined !text-base">add</span>}
        />
      </div>
    </div>
  );
};

export default BlogCard;
