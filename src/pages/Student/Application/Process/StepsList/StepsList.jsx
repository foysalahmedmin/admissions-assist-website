const StepsList = ({ steps, stepTab, setStepTab }) => {
  return (
    <div>
      <div className="mb-12">
        <h3 className="title text-3xl">Your Steps</h3>
      </div>
      <ul className="flex flex-col gap-4">
        {steps?.map((step, i) => (
          <li
            key={i}
            onClick={() => setStepTab(step)}
            className={`${
              step?.title === stepTab?.title ? "text-white" : "bg-opacity-5"
            } title p-4 flex items-center gap-7 justify-between rounded bg-primary cursor-pointer`}
          >
            <span>{step?.title}</span>
            {step?.status === "completed" ? (
              <div className="h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center">
                <span
                  className={`material-icons-outlined !text-base transition-all`}
                >
                  done
                </span>
              </div>
            ) : (
              <div className="h-7 w-7 bg-white text-primary rounded-full flex items-center justify-center">
                <span
                  className={`material-icons-outlined !text-base transition-all`}
                >
                  arrow_forward_ios
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepsList;
