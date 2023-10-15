import courseImg from "@/assets/images/course-card.png";
import universityImg from "@/assets/images/course-university.svg";
import Button from "@/components/Buttons/Button";

const CourseSummary = () => {
  return (
    <section className="py-7" id="course_summary">
      <div className="container mx-auto">
        <div className="flex gap-7 lg:gap-12 mb-7">
          <div className="flex-1 flex items-center">
            <div className="max-w-4xl">
              <h2 className="title text-3xl mb-7">Course Summary</h2>
              <p>
                The Pearson BTEC Level 5 Higher National Diploma in Engineering
                offers students seven pathways, designed to support progression
                into relevant occupational areas or onto degree-level study.
                These pathways are linked to Professional Body standards (where
                appropriate) and can provide progression towards professional
                status or entry to the later stages of an appropriate degree.
                You will develop a sound understanding of the principles in your
                field of study, and learn how to apply those principles more
                widely. You will learn how to evaluate the appropriateness of
                different approaches to solving problems and be able to perform
                effectively in your chosen field. You will have the qualities
                necessary for employment in situations requiring the exercise of
                personal responsibility and decision-making.
              </p>
            </div>
          </div>
          <div>
            <div className="w-[25rem] relative -mt-[15.75rem]">
              <div className="bg-[#F4FAFA] rounded-3xl overflow-hidden shadow-lg p-4">
                <div className="h-52 relative">
                  <img
                    className="h-full w-full object-cover object-center rounded-t-2xl"
                    src={courseImg}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <img
                    className="h-40 w-40 rounded-xl object-cover object-center shadow relative mx-auto mb-7 -mt-20 z-10"
                    src={universityImg}
                    alt=""
                  />
                  <div>
                    <h5 className="title mb-2">
                      American International University
                    </h5>
                    <p>Barnsley College Higher Education</p>
                    <p>Church Street Campus</p>
                  </div>
                </div>
                <div className="py-7">
                  <Button
                    className={"mx-auto"}
                    text={"Enroll Now"}
                    icon={
                      <span className="material-icons-outlined">
                        trending_flat
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-7">
          <h3 className="title text-2xl mb-7">Modules</h3>
          <p className="mb-7">The two mandatory core units at Level 5 are: </p>
          <ul className="mb-7">
            <li className="">
              <span className="text-2xl">●</span> Unit 34: Research Project
            </li>
            <li className="">
              <span className="text-2xl">●</span> Unit 35: Professional
              Engineering Management*. *(Unit 35: Professional Engineering
              Management is also the Pearson-set assignment unit)
            </li>
          </ul>
          <p>
            For the General Engineering pathway, students take the two mandatory
            core units
          </p>
        </div>
        <div>
          <h3 className="title text-2xl mb-7">Assessment method</h3>
          <ul>
            <li className="">
              <span className="text-2xl">●</span> Internally assessed
              centre-devised internal assignments
            </li>
            <li className="">
              <span className="text-2xl">●</span> Internally assessed
              Pearson-set Units
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseSummary;
