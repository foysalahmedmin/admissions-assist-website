import CourseCard from "@/components/Cards/CourseCard/CourseCard";

const Courses = ({ selectedOptions, removeSelectedOption }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="py-3 flex-shrink-0">Filtered By:</span>
        <div className="flex flex-wrap items-center gap-4">
          {selectedOptions?.map((option, i) => (
            <div className="py-2 px-7 rounded-full border flex items-center gap-4">
              <span className="capitalize">{option}</span>
              <button
                onClick={() => removeSelectedOption(option)}
                className="hover:text-secondary"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="gird grid-cols-2 gap-7">{<CourseCard />}</div>
    </div>
  );
};

export default Courses;
