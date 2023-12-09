import { useEffect, useState } from "react";
import CallsField from "../CallsField/CallsField";
import CallList from "../CalltList/CallList";
import { call_list } from "@/assets/data/call_list/call_list";
import { call_histories } from "@/assets/data/call_history/call_histories";

const Calls = () => {
  const currentUser = {
    name: "Min",
    username: "min01",
  };
  const [callListData, setCallListData] = useState([]);
  const [displayCallHistories, setDisplayCallHistories] = useState([]);
  const [DisplayParticipants, setDisplayParticipants] = useState([]);
  const [displayCallHistories_Id, setDisplayCallHistories_Id] = useState("1");
  const [isCallHistoryShow, setIsCallHistoryShow] = useState(false);
  useEffect(() => {
    if (call_list) {
      const current_call_list = call_list.filter(
        (c, i) =>
          c.participants[0].username === currentUser.username ||
          c.participants[1].username === currentUser.username
      );
      setCallListData(current_call_list);
    }
  }, [currentUser.username]);
  useEffect(() => {
    if (call_histories && call_list) {
      const display_call_histories = call_histories.filter(
        (call) => call?.call_id === displayCallHistories_Id
      );
      const display_participants = call_list.find(
        (call) => call.id == displayCallHistories_Id
      )?.participants;
      setDisplayCallHistories(display_call_histories);
      setDisplayParticipants(display_participants);
    }
  }, [displayCallHistories_Id]);
  return (
    <div className="flex">
      <div
        className={`${
          !isCallHistoryShow ? "w-full lg:w-[25rem]" : "w-0 lg:w-[25rem]"
        }  lg:border-r overflow-hidden transition-all`}
      >
        <CallList
          callListData={callListData}
          currentUser={currentUser}
          displayCallHistories_Id={displayCallHistories_Id}
          setDisplayCallHistories_Id={setDisplayCallHistories_Id}
          setIsCallHistoryShow={setIsCallHistoryShow}
        />
      </div>
      <div
        className={`${isCallHistoryShow ? "block" : "hidden lg:block"} flex-1`}
      >
        <CallsField
          displayCallHistories_Id={displayCallHistories_Id}
          displayCallHistories={displayCallHistories}
          currentUser={currentUser}
          DisplayParticipants={DisplayParticipants}
          setIsCallHistoryShow={setIsCallHistoryShow}
        />
      </div>
    </div>
  );
};

export default Calls;
