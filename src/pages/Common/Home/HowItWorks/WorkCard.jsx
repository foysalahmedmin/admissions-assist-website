const WorkCard = ({ index, data }) => {
  const { serial_no, title, text } = data;
  return (
    <div className="text-center">
      <div className="h-14 w-14 lg:h-24 lg:w-24 mb-4 lg:mb-7 mx-auto rounded-full border flex items-center justify-center">
        <span className="text-3xl lg:text-5xl text-primary title">
          {serial_no}
        </span>
      </div>
      <div className="flex items-center mx-auto w-40 lg:w-full mb-4 lg:mb-7">
        <div className="flex-1">
          <hr className={`${index % 3 == 0 && "lg:hidden"}`} />
        </div>
        <div className="h-4 w-4 rounded-full bg-line"></div>
        <div className="flex-1">
          <hr className={`${(index - 2) % 3 == 0 && "lg:hidden"}`} />
        </div>
      </div>
      <div className="px-6">
        <h1 className="text-primary text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default WorkCard;
