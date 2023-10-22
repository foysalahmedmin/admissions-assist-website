import { LuPenSquare } from "react-icons/lu";
import SingleCallList from "./SingleCallList";

const CallList = ({
  callListData,
  currentUser,
  displayCallHistories_Id,
  setDisplayCallHistories_Id,
  setIsCallHistoryShow,
}) => {
  return (
    <aside>
      <div className="px-[3.5vw] lg:px-7 h-14 flex items-center justify-between border-b">
        <h5 className="title text-2xl">Calls</h5>
        <LuPenSquare className="text-2xl" />
      </div>
      <div className="h-[calc(100vh-8.5rem)] overflow-y-auto py-4">
        <ul className="flex flex-col gap-4">
          {callListData.map((singleData, i) => (
            <li key={i}>
              <SingleCallList
                singleData={singleData}
                currentUser={currentUser}
                displayCallHistories_Id={displayCallHistories_Id}
                setDisplayCallHistories_Id={setDisplayCallHistories_Id}
                setIsCallHistoryShow={setIsCallHistoryShow}
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CallList;
