import Button from "@/components/Buttons/Button";
import { LuFileQuestion, LuTrash2, LuUpload } from "react-icons/lu";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Step_BasicInformation = ({ setStepStatusAndSetTab }) => {
  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Basic information saved");
    setStepStatusAndSetTab();
  };
  return (
    <div>
      <form>
        <div>
          <h1 className="title text-2xl">Basic information</h1>
        </div>
        <hr className="mt-4 mb-7" />
        <div className="mb-7">
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Activities name</th>
                  <th>Activity details</th>
                  <th>Instruction</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td>Passport (Required) </td>
                  <td>Passport@Monika hasan.pdf </td>
                  <td>
                    <div className="h-7 w-7 mx-auto rounded-full flex items-center justify-center bg-darkblue text-white">
                      <LuFileQuestion />
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-2 items-center justify-center">
                      <div className="h-7 w-7 rounded-full flex items-center justify-center bg-darkblue text-white">
                        <LuUpload />
                      </div>
                      <div className="h-7 w-7 rounded-full flex items-center justify-center bg-darkblue text-white">
                        <LuTrash2 />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Button
            onClick={() => ""}
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
      </form>
      <div></div>
    </div>
  );
};

export default Step_BasicInformation;
