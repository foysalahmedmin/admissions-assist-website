import Button from "@/components/Buttons/Button";
import Table from "./Table/Table";
import FAQ from "./FAQ";

const table_data = [
  {
    activities_name:
      "lease join for Counselling at this date on zoom. (Required)",
    activity_details: "2023-06-20 10:19:00",
  },
];

const Step_StudentCounselling = ({ setStepStatusAndSetTab }) => {
  const handleSave = (e) => {
    e.preventDefault();
    setStepStatusAndSetTab();
  };
  return (
    <div>
      <div>
        <div>
          <h1 className="title text-2xl">Additional Documents</h1>
        </div>
        <hr className="mt-4 mb-7" />
        <div className="mb-7">
          <Table table_data={table_data} />
        </div>
        <div>
          <Button
            onClick={handleSave}
            type={"submit"}
            text={"Save"}
            icon={
              <span className="material-icons-outlined">trending_flat</span>
            }
          />
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Step_StudentCounselling;
