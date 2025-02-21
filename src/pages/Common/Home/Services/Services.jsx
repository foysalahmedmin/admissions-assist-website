import cardIcon1 from "@/assets/images/icons/student-consultation.svg";
import cardIcon2 from "@/assets/images/icons/student-counselling.svg";
import cardIcon3 from "@/assets/images/icons/student-sinance-support.svg";
import servicerImg from "@/assets/images/servicer-women.png";
import Button from "@/components/Buttons/Button";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const card_data = [
  {
    icon_url: cardIcon1,
    title: "Student Consultation",
    text: `We conduct virtual sessions to provide personalized guidance in navigating your academic journey, directing you towards your desired educational institution, considering your qualifications and prior experiences.`,
  },
  {
    icon_url: cardIcon2,
    title: "Student Counselling",
    text: `Our dedicated support includes personalized assistance throughout the application process and conducting informative IAG (Information, Advice, and Guidance) sessions, equipping you with the necessary skills and confidence to excel in admission assessments.`,
  },
  {
    icon_url: cardIcon3,
    title: "Student Finance Support",
    text: `Our team of experienced and committed professionals will provide step-by-step guidance to navigate the intricate student finance application process, ensuring you receive the necessary support and assistance along the way.`,
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto">
        <div className="lg:pt-24 pt-14 lg:px-12 px-7 bg-[#F0FAFA] rounded-xl">
          <SectionTitle
            subtitle={"Our Services"}
            title={"Our Comprehensive Services"}
            text={`Guiding you step-by-step, from university selection to the final application submission`}
          />
          <div>
            <div className="mb-12">
              <div className="grid gap-7 lg:gap-12 lg:grid-cols-3 justify-between">
                {card_data.slice(0, 3).map((data, i) => (
                  <ServiceCard key={i} data={data} />
                ))}
              </div>
            </div>
            <div>
              <div className="grid lg:grid-cols-2 grid-rows-1 items-end gap-4">
                <div className="mb-12 lg:mb-24">
                  <div className="mb-7">
                    <h1 className=" text-3xl lg:text-5xl title mb-4">
                      Elevate Your Learning Journey With us
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in volupt velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="mb-7">
                    <div className="flex gap-4 items-center mb-4">
                      <div className="h-12 w-12 shrink-0 rounded-full border-2 border-primary-500 text-primary-500 flex items-center justify-center">
                        <span className="material-icons-outlined">check</span>
                      </div>
                      <strong className="title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </strong>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="h-12 w-12 shrink-0 rounded-full border-2 border-primary-500 text-primary-500 flex items-center justify-center">
                        <span className="material-icons-outlined">check</span>
                      </div>
                      <strong className="title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </strong>
                    </div>
                  </div>
                  <Link to={"/authentication/sign_up"}>
                    <Button
                      text={"Create An Account"}
                      icon={
                        <span className="material-icons-outlined">
                          trending_flat
                        </span>
                      }
                    />
                  </Link>
                </div>
                <div className="">
                  <img
                    className="w-full mt-auto"
                    src={servicerImg}
                    alt=""
                    loading="lazy"
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

export default Services;
