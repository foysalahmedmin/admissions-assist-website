/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import CourseSummary from "../CourseSummary/CourseSummary";
import EntryRequirements from "../EntryRequirements/EntryRequirements";
import HowToApply from "../HowToApply/HowToApply";
import LanguageRequirements from "../LanguageRequirements/LanguageRequirements";
import Option from "../Option/Option";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSingleRequirement } from "@/pages/Common/Course/Course/requests/courseApi.js";
import CareerOpportunity from "@/pages/Common/Course/CareerOpportunity/CareerOpportunity.jsx";

const Course = () => {
  const { sId, rId, uId } = useParams();
  const { data: requirement } = useQuery({
    queryKey: ["single_requirement", rId],
    queryFn: () => fetchSingleRequirement(rId),
    enabled: !!rId,
  });

  return (
    <main className="bg-background">
      <Banner info={requirement} />
      <CourseSummary info={requirement} />
      <HowToApply info={requirement} />
      <EntryRequirements
        local={requirement?.local}
        internation={requirement?.international}
        notRequiredInternational={requirement?.notRequiredInternational}
        notRequiredLocal={requirement?.notRequiredLocal}
        international_type={requirement?.international_type}
      />
      <LanguageRequirements
        internation={requirement?.international}
        international_type={requirement?.international_type}
      />
      <CareerOpportunity
        career_opportunity={
          requirement?.isCourse
            ? requirement?.course_details?.career_opportunity
            : requirement?.subject?.career_opportunity
        }
      />
      <Blogs />
      <Option info={requirement} />
    </main>
  );
};

export default Course;
