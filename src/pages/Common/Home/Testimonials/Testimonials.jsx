import SectionTitle from "@/components/SectionTitle/SectionTitle";

const Testimonials = () => {
  return (
    <section className="lg:py-24 py-14" id="testimonials">
      <div className="container">
        <SectionTitle
          subtitle={"Our Testimonials"}
          title={`Hear from Our Success Stories`}
          text={`Real experiences shared by students who've found their academic home in the UK with our assistance.`}
        />
        <div></div>
      </div>
    </section>
  );
};

export default Testimonials;
