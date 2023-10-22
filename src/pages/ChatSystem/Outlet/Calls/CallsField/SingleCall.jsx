import profileImg from "@/assets/images/profile.jpg";
import { formatDuration } from "@/helpers/formatDuration/formatDuration";
import { format } from "date-fns";
import { BiPhone, BiVideo } from "react-icons/bi";

const SingleCall = ({ call, currentUser }) => {
  const {
    id,
    call_status,
    call_dialer,
    isReceived,
    duration,
    conversation_start_time,
    conversation_start_end,
    timestamp,
  } = call;
  const isOpponent = call_dialer?.username !== currentUser.username;
  return (
    <div
      className={`${
        isOpponent ? "" : ""
      } w-full flex gap-2 items-center justify-between mb-4`}
    >
      <div
        className={`${
          isOpponent ? "" : ""
        } flex items-center gap-2 min-w-[8rem]`}
      >
        {isOpponent ? (
          <img
            className="h-8 w-8 flex-shrink-0 object-cover object-center rounded-full"
            src={profileImg}
            alt=""
          />
        ) : <div className="h-8 w-8 bg-primary text-white font-bold text-3xl rounded-full text-center">Y</div>}
        <div>
          {isOpponent ? <h1 className="text-title">{call_dialer?.name}</h1> : <h1 className="text-title">{"You"}</h1>}
          <div className="flex items-center gap-2">
            {call_status === "video" ? (
              <BiVideo className="mt-[1px]" />
            ) : (
              <BiPhone className="mt-[1px]" />
            )}
            <span className="text-xs capitalize">{call_status} call</span>
          </div>
        </div>
      </div>
      <div className="min-w-[5rem] text-center">
        {duration && (
          <p className="text-xs text-title">{formatDuration(duration)}</p>
        )}
      </div>
      <div className="min-w-[8rem]">
        <p className="text-xs text-title">
          {format(new Date(timestamp), "dd/MM/yy HH:mm a")}
        </p>
      </div>
    </div>
  );
};

export default SingleCall;
