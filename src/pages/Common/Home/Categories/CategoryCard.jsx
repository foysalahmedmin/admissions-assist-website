const CategoryCard = ({ data }) => {
  const { icon_url, title, text } = data;
  return (
    <div className="text-center">
      <div className="h-14 w-14 lg:h-24 lg:w-24 mx-auto mb-4 flex items-center justify-center">
        <img className="h-full w-full object-contain" src={icon_url} alt="" />
      </div>
      <div>
        <h1 className="text-title text-2xl font-bold">{title}</h1>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};
export default CategoryCard;
