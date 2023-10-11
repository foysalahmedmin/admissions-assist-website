import Button from "@/components/Buttons/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import robotCheckIcon from "@/assets/images/icons/robot-check.svg";

const ContactForm = () => {
  return (
    <section className="lg:py-24 py-14">
      <div className="container mx-auto">
        <SectionTitle
          subtitle={"We want to hear from you"}
          title={"Get in Touch with Us"}
          text={
            "Stay ahead of the curve by enrolling in trending disciplines recognized worldwide."
          }
        />
        <div className="max-w-5xl mx-auto px-7 lg:px-12">
          <form>
            <div className="grid lg:grid-cols-2 gap-7 mb-7">
              <div>
                <label htmlFor="name" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text bg-white"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text bg-white"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text bg-white"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="inquiry" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Select Inquiry
                  </span>
                </label>
                <select
                  type="text"
                  name="inquiry"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text bg-white"
                  id="inquiry"
                  required
                >
                  <option value="">Select Inquiry</option>
                  <option value="">Admission help</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="describe" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Describe here
                  </span>
                </label>
                <textarea
                  type="text"
                  name="describe"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text bg-white"
                  id="describe"
                  placeholder="Write here"
                />
              </div>
            </div>
            <div className="mb-7 flex justify-center">
              <label htmlFor="robot_check" className="cursor-pointer">
                <div className="flex items-center justify-center rounded-xl bg-white px-7 py-4 gap-12 mx-auto">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      name="robot_check"
                      id="robot_check"
                    />
                    <span>I'm not robot</span>
                  </div>
                  <div>
                    <img src={robotCheckIcon} alt="" />
                  </div>
                </div>
              </label>
            </div>
            <div>
              <Button
                className={"w-full"}
                type={"submit"}
                text={"submit"}
                icon={
                  <span className="material-icons-outlined">trending_flat</span>
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
