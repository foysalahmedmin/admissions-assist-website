import Button from "@/components/Buttons/Button";
import { LuFlag } from "react-icons/lu";
import FAQ from "./FAQ";
import Table from "./Table/Table";

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
          <div className="flex flex-wrap gap-4 items-center">
            <h1 className="title text-2xl">Basic information</h1>
            <p className="bg-[#FFDEDE] text-[#FF2222] inline-flex items-center gap-2 px-4 py-1 rounded-full">
              <LuFlag />
              <span>Passport was not properly uploated</span>
            </p>
          </div>
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
