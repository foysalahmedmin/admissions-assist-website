import img from "@/assets/images/profile.jpg";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const SingleNotification = () => {
  return (
    <li className="border-b py-7 flex items-start gap-2 text-sm">
      <GoDotFill className="text-primary-500 mt-[2px]" />
      <div className="flex-1">
        <p className="mb-4">
          First view on <strong>Peter’s Big Cool Idea</strong>
        </p>
        <div className="flex items-center gap-4">
          <img className="h-7 w-7 rounded-full" src={img} alt="" />
          <p>
            <strong>Someone</strong>  Uploaded{" "}
            <Link className="underline text-primary-500">name_file.pdf</Link>{" "}
            <GoDotFill className="text-xs inline-block" /> about 13 hours ago
          </p>
        </div>
      </div>
    </li>
  );
};

export default SingleNotification;
