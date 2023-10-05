import BackgroundLayer from "@/components/BackgroundLayer/BackgroundLayer";
import Guidance from "@/pages/Student/Profile/Status/Guidance";
import UserAbout from "@/pages/Student/Profile/Status/UserAbout";

const Status = () => {
  return (
    <section className="pb-80 lg:mb-24 mb-14">
      <BackgroundLayer image_url={"/background/student-status.svg"}>
        <div className="container mx-auto py-1">
          <UserAbout />
          <Guidance />
        </div>
      </BackgroundLayer>
    </section>
  );
};

export default Status;
