import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import CourseSummary from "../CourseSummary/CourseSummary";
import EntryRequirements from "../EntryRequirements/EntryRequirements";
import HowToApply from "../HowToApply/HowToApply";
import LanguageRequirements from "../LanguageRequirements/LanguageRequirements";
import Option from "../Option/Option";

const Course = () => {
  return (
    <main className="bg-background">
      <Banner />
      <CourseSummary />
      <HowToApply />
      <EntryRequirements />
      <LanguageRequirements />
      <Blogs />
      <Option />
    </main>
  );
};

export default Course;
