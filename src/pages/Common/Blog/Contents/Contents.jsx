import blogImage from "@/assets/images/university-slide-1.png";
import {
  BiCalendarAlt,
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiMessageSquareDetail,
} from "react-icons/bi";
import invitedComma from "@/assets/images/icons/inverted-comma.svg";
import { LuCheckCircle } from "react-icons/lu";
const Contents = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full mb-7">
          <img
            className="w-full h-[55vw] lg:h-[35vw] xl:h-[45rem] rounded-xl object-cover object-center"
            src={blogImage}
            alt=""
          />
        </div>
        <div className="flex gap-4 text-title mb-7">
          <div className="flex items-center gap-2">
            <BiCalendarAlt className="text-2xl text-primary" />
            <span>02 September, 2023</span>
          </div>
          <div className="w-[1px] bg-title"></div>
          <div className="flex items-center gap-2">
            <BiMessageSquareDetail className="text-2xl text-primary" />
            <span>5 Comment</span>
          </div>
        </div>
        <div className="mb-7">
          <h3 className="title text-3xl mb-7">
            Education Fair in New Castle Afrovation 2023
          </h3>
          <p>
            The Pearson BTEC Level 5 Higher National Diploma in Engineering
            offers students seven pathways, designed to support progression into
            relevant occupational areas or onto degree-level study. These
            pathways are linked to Professional Body standards (where
            appropriate) and can provide progression towards professional status
            or entry to the later stages of an appropriate degree. You will
            develop a sound understanding of the principles in your field of
            study, and learn how to apply those principles more widely. You will
            learn how to evaluate the appropriateness of different approaches to
            solving problems and be able to perform effectively in your chosen
            field. You will have the qualities necessary for employment in
            situations requiring the exercise of personal responsibility and
            decision-making.
          </p>
        </div>
        <div className="mb-7">
          <h3 className="title text-3xl mb-7">
            Achieve Your Business Goal With Us
          </h3>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat
          </p>
        </div>
        <div className="rounded-3xl p-7 bg-input mb-7">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-7">
            <div className="flex-shrink-0 flex items-center justify-between py-2">
              <img src={invitedComma} alt="" />
            </div>
            <div className="w-full h-1 md:w-2 md:h-auto bg-primary"></div>
            <div className="flex items-center py-2">
              <p className="font-bold text-2xl">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                cum fuga ab, eum dolores numquam ea quae takimata sanctus est
                Lorem ipsum ducimus"
              </p>
            </div>
          </div>
        </div>
        <div className="mb-7">
          <h3 className="title text-3xl mb-7">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        <div className="mb-7">
          <ul className="flex flex-col gap-4">
            <li>
              <div className="flex items-center gap-4">
                <LuCheckCircle className="text-2xl text-primary" />
                <span className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <LuCheckCircle className="text-2xl text-primary" />
                <span className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <LuCheckCircle className="text-2xl text-primary" />
                <span className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <LuCheckCircle className="text-2xl text-primary" />
                <span className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-4">
                <LuCheckCircle className="text-2xl text-primary" />
                <span className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 mb-7">
          <div className="h-60 md:h-80 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={blogImage}
              alt=""
            />
          </div>
          <div className="h-60 md:h-80 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={blogImage}
              alt=""
            />
          </div>
        </div>
        <div className="mb-7">
          <h3 className="title text-3xl mb-7">What are the Signs?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad
            voluptatibus ratione minima dignissimos exercitationem, dolor eum
            expedita deleniti aspernatur aperiam soluta? Dicta optio illum
            reprehenderit quo suscipit sequi veritatis. Adipisicing elit. Nihil
            ad voluptatibus ratione minima dignissimos exercitationem, dolor eum
            expedita deleniti aspernatur aperiam soluta
          </p>
        </div>
        <hr className="my-7" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-labels">Tags:</span>
            <p className="text-title">
              <span>Study abroad </span>, <span>Student</span>,{" "}
              <span>University</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-labels">Share:</span>
            <div className="flex items-center gap-4">
              <div className="h-7 w-7 rounded border border-primary text-primary flex items-center justify-center cursor-pointer">
                <BiLogoFacebook className="text-xl" />
              </div>
              <div className="h-7 w-7 rounded border border-primary text-primary flex items-center justify-center cursor-pointer">
                <BiLogoLinkedin className="text-xl" />
              </div>
              <div className="h-7 w-7 rounded border border-primary text-primary flex items-center justify-center cursor-pointer">
                <BiLogoInstagramAlt className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
