import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Campus from "../Campus/Campus";
import Courses from "../Courses/Courses";
import Option from "../Option/Option";
import Overview from "../Overview/Overview";
import Scholarship from "../Scholarship/Scholarship";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  fetchUniversityDetails,
  fetchUniversityWiseCourses,
} from "@/pages/Common/University/University/requests/api.js";

const University = () => {
  const { id } = useParams();
  const { data: university } = useQuery({
    queryKey: ["get_one_university_website", id],
    queryFn: () => fetchUniversityDetails(id),
    enabled: !!id,
  });

  const { data: universityCourses } = useQuery({
    queryKey: ["university_and_courses", id],
    queryFn: () => fetchUniversityWiseCourses(id),
    enabled: !!id,
  });

  return (
    <main className="bg-background">
      <Banner info={university} />
      <Overview overview={university?.overview} />
      <Scholarship scholarship={university?.scholarship} />
      <Courses courses={universityCourses} />
      <Campus campuses={university?.campuses} />
      <Blogs />
      <Option />
    </main>
  );
};

export default University;
