import SubFooter from "@/pages/Footer/SubFooter/SubFooter";
import Appointment from "@/pages/Student/Profile/Appointment/Appointment";
import Banner from "@/pages/Student/Profile/Banner/Banner";
import Status from "@/pages/Student/Profile/Status/Status";
import TopUniversities from "@/pages/Student/Profile/TopUniversities/TopUniversities";

const Profile = () => {
  return (
    <main className="bg-background">
      <Banner />
      <Status />
      <Appointment />
      <TopUniversities />
      <SubFooter />
    </main>
  );
};

export default Profile;
