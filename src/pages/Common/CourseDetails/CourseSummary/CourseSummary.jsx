import courseImg from "@/assets/images/course-card.png";
import universityImg from "@/assets/images/course-university.svg";
import Button from "@/components/Buttons/Button";

const CourseSummary = () => {
  return (
    <section className="" id="course_summary">
      <div className="container mx-auto">
        <div className="flex gap-7">
          <div className="flex-1 py-7 flex items-center">
            <div>
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
            <div className="w-[25rem] relative -mt-56">
              <div className="bg-[#F4FAFA] rounded-3xl overflow-hidden shadow-2xl p-4">
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
      </div>
    </section>
  );
};

export default CourseSummary;
