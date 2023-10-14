import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { icon_url, title, text } = data;
  return (
    <div className="text-center">
      <div className="h-14 w-14 lg:h-24 lg:w-24 mx-auto mb-7 flex items-center justify-center">
        <img className="h-full w-full object-contain" src={icon_url} alt="" />
      </div>
      <div>
        <h1 className=" text-2xl title mb-4">{title}</h1>
        <p className="text-lg">
          {text}{" "}
          <Link>
            <span className="text-secondary underline block cursor-pointer">Learn More</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
