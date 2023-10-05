import SubFooter from "@/pages/Footer/SubFooter/SubFooter";
import Banner from "@/pages/Student/Profile/Banner/Banner";
import Status from "@/pages/Student/Profile/Status/Status";
import Appointment from "@/pages/Student/Profile/Appointment/Appointment";

const Profile = () => {
  return (
    <main>
      <Banner />
      <Status />
      <Appointment />
      <SubFooter />
    </main>
  );
};

export default Profile;
