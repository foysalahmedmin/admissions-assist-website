import Button from "@/components/Buttons/Button";
import Table from "./Table/Table";
import FAQ from "./FAQ";

const table_data = [
  {
    activities_name:
      "This is to remind you that your student finance has been successfully done and no further documents are required.",
    activity_details: "Completed",
  },
];

const Step_StudentFinanceCompleted = ({ setStepStatusAndSetTab }) => {
  const handleSave = (e) => {
    e.preventDefault();
    setStepStatusAndSetTab();
  };
  return (
    <div>
      <div>
        <div>
          <h1 className="title text-2xl">Student Finance Completed</h1>
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

export default Step_StudentFinanceCompleted;
