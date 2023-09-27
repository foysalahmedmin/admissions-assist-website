const ServiceCard = ({ data }) => {
  const { icon_url, title, description } = data;
  return (
    <div className="text-center">
      <div className="h-14 w-14 lg:h-24 lg:w-24 mx-auto mb-7 flex items-center justify-center">
        <img className="h-full w-full object-contain" src={icon_url} alt="" />
      </div>
      <div>
        <h1 className="text-primary text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
