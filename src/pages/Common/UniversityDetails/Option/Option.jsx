import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";

const Option = () => {
  return (
    <BackgroundLayer
      image_url={"/background/courses-details-option-section.png"}
      bg_position={"bg-center"}
      className={"lg:py-24 py-14"}
    >
      <div className="container mx-auto text-center">
        <h1 className="title text-white text-3xl lg:text-5xl mb-12">
          Not Sure How To Proceed <br /> Find a Consultant
        </h1>
        <div className="flex items-center justify-center">
          <div className="min-w-[27rem] min-h-[10rem] bg-white rounded-xl flex items-center justify-center text-center">
            <div>
              <strong className="title">
                Book a Session With Our <br /> Expert Consultant{" "}
              </strong>
              <Button
                className={"mt-2 mx-auto"}
                text={"Book An Appointmnet"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
              />
            </div>
          </div>
          <div className="h-24 w-24 rounded-full -ml-7 -mr-7 z-10">
            <div className="h-full w-full border-8 border-primary rounded-full">
              <div className="h-full w-full border-4 border-white rounded-full bg-primary flex items-center justify-center">
                <h3 className="title text-white text-3xl">Or</h3>
              </div>
            </div>
          </div>
          <div className="min-w-[27rem] min-h-[10rem] bg-white rounded-xl flex items-center justify-center text-center">
            <div>
              <strong className="title">Proceed To Application</strong>
              <Button
                className={"mt-2 mx-auto"}
                text={"Enroll Now"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundLayer>
  );
};

export default Option;
