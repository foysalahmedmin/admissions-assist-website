import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";
import { LuDownload } from "react-icons/lu";

const Selector = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-7">
      <div>
        <h3 className="title text-2xl mb-4">Select A university to proceed</h3>
        <div>
          <select
            type="text"
            name="graduation_year"
            className="px-7 py-4 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
            id="graduation_year"
            required
          >
            <option value="">Select University</option>
            <option value="">American International University</option>
          </select>
        </div>
      </div>
      <div className="lg:ml-auto lg:text-center">
        <h3 className="title text-2xl mb-4">Downloadable</h3>
        <div className="inline-flex items-center gap-4 text-[#2170E7]">
          <span>IAG_Student_file.pdf</span> <LuDownload />
        </div>
      </div>
      <div>
        <div className="lg:max-w-[12rem] lg:ml-auto lg:text-center">
          <ProgressBarLinear
            percentage={45}
            strokeSize={8}
            className={"text"}
            percentSize={"2rem"}
          >
            <div className="mb-4">
              <h3 className="title text-2xl">{45}%</h3>
              <strong className="title text-sm">Application Completed</strong>
            </div>
          </ProgressBarLinear>
        </div>
      </div>
    </div>
  );
};

export default Selector;
