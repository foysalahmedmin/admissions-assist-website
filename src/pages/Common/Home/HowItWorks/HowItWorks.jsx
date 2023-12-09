import SectionTitle from "@/components/SectionTitle/SectionTitle";
import WorkCard from "@/pages/Common/Home/HowItWorks/WorkCard";
const card_data = [
  {
    serial_no: "1",
    title: "Create Your Profile",
    text: "Fill in your personal information, academic background, desired courses, and preferences.",
  },
  {
    serial_no: "2",
    title: "Explore Top Universities",
    text: "Browse through our curated list of top-ranked UK universities, tailored to your academic interests",
  },
  {
    serial_no: "3",
    title: "Find Preferred Course",
    text: "Search and explore trending courses that match your career goals and align with global demands",
  },
  {
    serial_no: "4",
    title: "Get Expert Guidance",
    text: "Connect with dedicated counselors who'll guide you through university selection, application processes, and any queries you might have",
  },
  {
    serial_no: "5",
    title: "Submit Applications",
    text: "Once you've made your choice, our platform streamlines your application process, ensuring you meet all requirements",
  },
  {
    serial_no: "6",
    title: "Celebrate  Acceptance",
    text: "Upon acceptance, celebrate your success! And don’t stop there — access our resources to prepare for your move to the UK",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="lg:py-24 py-14 bg-[url('/background/how_it_works-section.svg')] bg-no-repeat bg-cover bg-top"
      id="how_it_works"
    >
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"How it Works"}
          title={"How it Works"}
          text={`Navigating Your Path to Success: A Step-by-Step Guide to Achieving 
Your UK University Dreams`}
        />
        <div>
          <div className="grid gap-y-7 lg:gap-y-12 lg:grid-cols-3 justify-between">
            {card_data?.map((data, i) => (
              <WorkCard key={i} index={i} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
