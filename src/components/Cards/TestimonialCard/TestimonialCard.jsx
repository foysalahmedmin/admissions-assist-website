import comma from "@/assets/images/icons/inverted-comma.svg";
import StarRating from "@/components/StarRating/StarRating";

const TestimonialCard = ({ data }) => {
  const { name, image_url, profession, comment, rating } = data;
  return (
    <div className="min-h-[320px] p-7 bg-primary bg-opacity-10 rounded-xl overflow-hidden relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            className="w-14 h-14 object-cover shrink-0 rounded-full"
            src={image_url}
            alt=""
          />
          <div>
            <h3 className=" title text-xl">{name}</h3>
            <p>{profession}</p>
          </div>
        </div>
        <img src={comma} alt="" />
      </div>
      <div className="flex flex-col mb-4">
        <div className="mt-auto">
          <p>{comment} </p>
        </div>
      </div>
      <div>
        <StarRating rating={rating} out_of={5} />
      </div>
    </div>
  );
};

export default TestimonialCard;
