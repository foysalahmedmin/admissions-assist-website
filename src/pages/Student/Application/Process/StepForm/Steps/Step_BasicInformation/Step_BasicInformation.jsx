import Button from "@/components/Buttons/Button";
import Table from "./Table/Table";
import FAQ from "./FAQ";

const table_data = [
  {
    activities_name: "Passport (Required)",
    activity_details: "Passport@Monika hasan.pdf",
  },
  {
    activities_name: "Selfie photo (Required)",
    activity_details: "Photo@Monika.jpg",
  },
];

const Step_BasicInformation = ({ setStepStatusAndSetTab }) => {
  const handleSave = (e) => {
    e.preventDefault();
    setStepStatusAndSetTab();
  };
  return (
    <div>
      <div>
        <div>
          <h1 className="title text-2xl">Basic information</h1>
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

export default Step_BasicInformation;
