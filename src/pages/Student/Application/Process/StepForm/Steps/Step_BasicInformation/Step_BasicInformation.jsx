import Button from "@/components/Buttons/Button";
import { Link } from "react-router-dom";
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
        <hr className="my-7" />
        <div>
          <h1 className="title text-2xl mb-4">Contact information</h1>
          <ul className="flex flex-col gap-2 text-title">
            <li>
              <Link className="underline">
                Can I save my application and return to complete it later?
              </Link>
            </li>
            <li>
              <Link className="underline">How do I upload my documents?</Link>
            </li>
            <li>
              <Link className="underline">
                My documents are too large to upload. How do I reduce the file
                size?
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Step_BasicInformation;
