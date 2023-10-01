import { AiOutlineCalendar, AiOutlineTag } from "react-icons/ai";

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
            <AiOutlineCalendar className="text-2xl" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineTag className="text-2xl" />
            <span>{category}</span>
          </div>
        </div>
        <h3 className="font-bold text-title text-2xl mb-4">{title}</h3>
        <div className="flex items-center gap-1 text-secondary"><span>Read More</span><span className="material-icons-outlined !text-base">add</span></div>
      </div>
    </div>
  );
};

export default BlogCard;
