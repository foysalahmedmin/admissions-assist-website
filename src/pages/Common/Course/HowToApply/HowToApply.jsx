import moment from "moment";

const HowToApply = ({ info }) => {
  console.log(moment(info?.university?.session?.end_date).format("DD"));
  console.log(moment(info?.university?.session?.end_date).format("MMMM"));
  return (
    <section className="py-7" id="how_to_apply">
      <div className="container mx-auto">
        <div className="mb-7">
          <h2 className="title text-3xl mb-7">How to apply</h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-7">
            <div className="w-32 h-32 flex flex-col rounded-xl overflow-hidden bg-white">
              <div className="flex-1 flex items-center justify-center">
                <span className="title text-5xl">
                  {moment(info?.university?.session?.end_date).format("DD")}
                </span>
              </div>
              <div className="py-1 text-center bg-primary-500 text-white font-bold">
                <span>
                  {moment(info?.university?.session?.end_date).format("MMMM")}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p>
                This is the deadline for applications to be completed and sent
                for this course. If the university or <br /> college still has
                places available you can apply after this date, but your
                application is not guaranteed <br /> to be considered after{" "}
                {moment(info?.university?.session?.end_date).format(
                  "DD MMMM yyyy"
                )}
                .
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="title text-2xl mb-7">Application codes</h3>
          <div className="max-w-xs">
            <div className="w-full flex gap-2 mb-1">
              <span className="flex-1 block">
                {info?.isCourse ? "Course" : "Subject"} :
              </span>
              <strong className="flex-1 block">
                {info?.isCourse
                  ? info?.course_details?.name
                  : info?.subject?.name}
              </strong>
            </div>
            <div className="w-full flex gap-2 mb-1">
              <span className="flex-1 block">Course Fees:</span>
              <strong className="flex-1 block">
                $
                {info?.isCourse
                  ? info?.course_details?.fees
                  : info?.subject?.fees}
              </strong>
            </div>
            <div className="w-full flex gap-2 mb-1">
              <span className="flex-1 block">Campus location:</span>
              <strong className="flex-1 block">
                {info?.university?.campuses[0]?.location}
              </strong>
            </div>
            <div className="w-full flex gap-2">
              <span className="flex-1 block">Campus name:</span>
              <strong className="flex-1 block">
                {info?.university?.campuses[0]?.name}
              </strong>
            </div>
          </div>
        </div>
        <hr className="my-7" />
      </div>
    </section>
  );
};

export default HowToApply;
