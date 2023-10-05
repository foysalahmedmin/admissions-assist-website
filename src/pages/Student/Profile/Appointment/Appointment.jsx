import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Button from "@/components/Buttons/Button";
import { RiCalendarCheckLine } from "react-icons/ri";

const Appointment = () => {
  return (
    <>
      <BackgroundLayer
        bg_position={"bg-right"}
        image_url={"/background/appointment.png"}
        className={"lg:py-24 py-14 bg-black"}
      >
        <div className="">
          <div className="container mx-auto text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-5xl title text-white mb-4">
                  Not Sure! How To Proceed
                </h1>
                <p>
                  Tailored recommendations based on your profile, ensuring the
                  best fit for your academic aspirations.
                </p>
              </div>
              <div>
                <Button
                  className={"ml-auto"}
                  text={"Book a Session"}
                  icon={
                    <RiCalendarCheckLine className="text-xl" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundLayer>
    </>
  );
};

export default Appointment;
