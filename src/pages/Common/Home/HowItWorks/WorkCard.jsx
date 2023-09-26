const WorkCard = ({ data }) => {
  const { serial_no, title, description } = data;
  return (
    <div className="text-center">
      <div className="h-14 w-14 lg:h-24 lg:w-24 mx-auto mb-12 rounded-full border flex items-center justify-center">
        <span className="text-3xl lg:text-5xl text-primary font-bold">
          {serial_no}
        </span>
      </div>
      <div>
        <h1 className="text-primary text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
