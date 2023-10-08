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
      <div>
        <div>
          <h1 className="title text-2xl">Basic information</h1>
        </div>
        <hr className="mt-4 mb-7" />
        <div className="mb-7">
          <div className="overflow-x-auto grid grid-cols-1">
            <table className="w-full">
              <thead>
                <tr className="bg-input">
                  <th className="text-title text-left px-4 py-2">
                    Activities name
                  </th>
                  <th className="text-title text-left px-4 py-2">
                    Activity details
                  </th>
                  <th className="text-title text-center px-4 py-2">
                    Instruction
                  </th>
                  <th className="text-title text-center px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="text-left px-4 py-2 whitespace-nowrap">Passport (Required) </td>
                  <td className="text-left px-4 py-2">
                    <Link className="underline text-primary">
                      Passport@Monika hasan.pdf
                    </Link>
                  </td>
                  <td className="text-left px-4 py-2">
                    <button
                      type="button"
                      className="h-7 w-7 mx-auto rounded-full flex items-center justify-center bg-darkblue text-white animate-pop active:scale-95"
                    >
                      <LuFileQuestion />
                    </button>
                  </td>
                  <td className="text-left px-4 py-2">
                    <div className="flex gap-2 items-center justify-center">
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                      >
                        <LuUpload />
                      </button>
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full flex items-center justify-center bg-red-500 text-white animate-pop active:scale-95"
                      >
                        <LuTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="text-left px-4 py-2 whitespace-nowrap">
                    Selfie photo (Required){" "}
                  </td>
                  <td className="text-left px-4 py-2">
                    <Link className="underline text-primary">
                      Photo@Monika.jpg
                    </Link>
                  </td>
                  <td className="text-left px-4 py-2">
                    <button
                      type="button"
                      className="h-7 w-7 mx-auto rounded-full flex items-center justify-center bg-darkblue text-white animate-pop active:scale-95"
                    >
                      <LuFileQuestion />
                    </button>
                  </td>
                  <td className="text-left px-4 py-2">
                    <div className="flex gap-2 items-center justify-center">
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full flex items-center justify-center bg-green-500 text-white animate-pop active:scale-95"
                      >
                        <LuUpload />
                      </button>
                      <button
                        type="button"
                        className="h-7 w-7 rounded-full flex items-center justify-center bg-red-500 text-white animate-pop active:scale-95"
                      >
                        <LuTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
