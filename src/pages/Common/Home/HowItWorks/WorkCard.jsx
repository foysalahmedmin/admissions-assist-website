const WorkCard = ({ data }) => {
  const { serial_no, title, text } = data;
  return (
    <div className="text-center">
      <div className="h-14 w-14 lg:h-24 lg:w-24 mx-auto mb-12 rounded-full border flex items-center justify-center">
        <span className="text-3xl lg:text-5xl text-primary title">
          {serial_no}
        </span>
      </div>
      <div>
        <h1 className="text-primary text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default WorkCard;
