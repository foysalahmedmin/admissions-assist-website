const UniversityCard = ({ data }) => {
  const { image_url, title, course_quantity } = data;
  return (
    <div>
      <div className="h-[420px] rounded-xl overflow-hidden relative">
        <img className="w-full h-full object-cover" src={image_url} alt="" />
        <div className="absolute bottom-0 left-0 right-0 inset-12 bg-gradient-to-t from-[#121212] text-center text-white p-4 pb-12 flex flex-col ">
          <div className="mt-auto">
            <h3 className="text-2xl title text-white">{title}</h3>
            <p className="title text-white">{course_quantity} Courses </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
