import Button from "@/components/Buttons/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const Schedule = () => {
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"Book a Session"}
          title={`Consult With Our Expert Councilors `}
          text={
            "Stay ahead of the curve by enrolling in trending disciplines recognized worldwide."
          }
        />
        <div className="max-w-5xl mx-auto py-7 px-7 shadow-custom">
          <div className="flex items-center justify-between mb-12">
            <div></div>
            <div>
                <Button className={'ghost-btn text-white bg-primary'} text={'Book a demo'} />
            </div>
          </div>
          <div className="flex items-center">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
