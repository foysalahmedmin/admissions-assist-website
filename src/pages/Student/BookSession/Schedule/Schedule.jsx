import Button from "@/components/Buttons/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useState } from "react";
import { BiLogoZoom, BiSolidTimeFive, BiWorld } from "react-icons/bi";
import Calendar from "../../../../components/Calendar/Calendar";

const Schedule = () => {
  const [days, setDays] = useState([]);
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
        <div className="max-w-5xl mx-auto py-7 px-7 lg:px-12 rounded-3xl shadow-custom">
          <div className="flex items-center justify-between mb-12">
            <div></div>
            <div>
              <Button
                className={"ghost-btn text-white bg-primary"}
                text={"Book a demo"}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-7">
            <div className="flex-1">
              <div className="py-4">
                <h3 className="text-2xl title text-text">
                  ACME <span>lnc</span>
                </h3>
              </div>
              <hr />
              <div className="my-4">
                <h3 className="title text-3xl text-primary mb-7">
                  Sales Consulation
                </h3>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div>
                      <BiSolidTimeFive className="text-3xl" />
                    </div>
                    <span className="font-bold">30 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <BiLogoZoom className="text-3xl" />
                    </div>
                    <span className="font-bold">Zoom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1px] bg-line hidden lg:block"></div>
            <div className="flex-1">
              <div className="py-4">
                <h3 className="text-2xl title text-text">
                  Select a date and time
                </h3>
              </div>
              <hr />
              <div className="my-4">
                <div className="mb-2">
                  <Calendar days={days} setDays={setDays} />
                </div>
                <div className="mb-4">
                  <input className="w-full" type="time" name="" id="" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2" htmlFor="country">
                    <span>
                      <BiWorld className="text-xl" />
                    </span>
                    <span>Eastern Time -</span>
                  </label>
                  <select
                    className="outline-none flex-1"
                    name="country"
                    id="country"
                  >
                    <option value="">Bangladesh</option>
                    <option value="">US & Canada</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
