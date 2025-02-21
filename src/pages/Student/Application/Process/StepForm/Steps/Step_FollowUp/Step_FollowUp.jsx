import Button from "@/components/Buttons/Button";
import Table from "./Table/Table";
import FAQ from "./FAQ";
import FeedbackModal from "./FeedbackModal";
import { useState } from "react";

const table_data = [
  {
    activities_name: "Do you have any feedback/queries?",
    activity_details: "Feedback",
  },
];

const Step_FollowUp = ({ setStepStatusAndSetTab }) => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();
    setStepStatusAndSetTab();
  };
  return (
    <div>
      <div>
        <div>
          <h1 className="title text-2xl">Follow Up</h1>
        </div>
        <hr className="mt-4 mb-7" />
        <div className="mb-7">
          <Table table_data={table_data} />
        </div>
        <div>
          <Button
            onClick={() => setIsFeedbackModalOpen(true)}
            text={"Submit"}
            icon={
              <span className="material-icons-outlined">trending_flat</span>
            }
          />
          <FeedbackModal
            isOpen={isFeedbackModalOpen}
            setIsOpen={setIsFeedbackModalOpen}
            handleSave={handleSave}
          />
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Step_FollowUp;
