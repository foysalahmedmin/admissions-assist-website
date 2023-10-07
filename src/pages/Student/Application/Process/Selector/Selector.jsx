import ProgressBarLinear from "@/components/ProgressBar/ProgressBarLinear";

const Selector = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center justify-between gap-7">
      <div>
        <h3 className="title text-2xl mb-4">Select A university to proceed</h3>
        <div>
          <select
            type="text"
            name="graduation_year"
            className="px-7 py-4 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
            id="graduation_year"
            required
          >
            <option value="">Select University</option>
            <option value="">American International University</option>
          </select>
        </div>
      </div>
      <div>
        <div className="max-w-[12rem] lg:ml-auto text-center">
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
