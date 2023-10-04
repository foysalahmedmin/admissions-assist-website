import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";

const Status = () => {
  return (
    <section>
      <BackgroundLayer image_url={"/background/student-status.svg"}>
        <div className="container mx-auto">
          <div className="p-7 rounded-xl bg-white">
            <div className="flex justify-between">
              <div></div>
              <div>
                <ProgressBarCircle
                  percentage={1}
                  strokeSize={12}
                  size={"170"}
                  className={'text'}
                  percentSize={'2rem'}
                  text={<div className="text-center">
                    <p className="text-title text-sm font-semibold">Profile Completed</p>
                    <p className="text-primary text-sm underline">Complete Now</p>
                  </div>}
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundLayer>
    </section>
  );
};

export default Status;
