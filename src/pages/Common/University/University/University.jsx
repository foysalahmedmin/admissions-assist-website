import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Campus from "../Campus/Campus";
import Courses from "../Courses/Courses";
import Option from "../Option/Option";
import Overview from "../Overview/Overview";
import Scholarship from "../Scholarship/Scholarship";

const University = () => {
  return (
    <main className="bg-background">
      <Banner />
      <Overview />
      <Scholarship />
      <Courses />
      <Campus />
      <Blogs />
      <Option />
    </main>
  );
};

export default University;
