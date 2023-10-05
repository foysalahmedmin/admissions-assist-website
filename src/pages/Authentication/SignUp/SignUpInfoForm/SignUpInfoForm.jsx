import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Buttons/Button";
import ProgressBarCircle from "@/components/ProgressBar/ProgressBarCircle";

const SignUpInfoForm = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse items-center justify-between bg-input px-7 py-4">
        <h3 className="title text-3xl">Profile Completeness</h3>
        <ProgressBarCircle percentage={45} size={67}>
          <div>
            <h3 className="text-title font-bold">{45}%</h3>
          </div>
        </ProgressBarCircle>
      </div>
      <div className="p-7">
        <form action="">
          <div className="grid grid-cols-1 gap-4 mb-12">
            <Accordion title={"Personal Details"} doneStatus={true}>
              <div className="mb-7">
                <label htmlFor="first_name" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                    First and Middle Name(s)
                  </span>
                  <p>
                    Make sure your name is as it appears on any official
                    documents, such as your passport, birth certificate or
                    driving license.
                  </p>
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="first_name"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="mb-7">
                <label htmlFor="last_name" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                    Last Name
                  </span>
                  <p>
                    If you don't have a last name, add your first name here
                    again.
                  </p>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="last_name"
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-7">
                <div>
                  <label htmlFor="date_of_birth" className="block mb-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                      Date of Birth (s)
                    </span>
                    <p>Enter as it appears on any official documents</p>
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                    id="date_of_birth"
                    required
                  />
                </div>
                <div>
                  <div className="block mb-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                      Gender
                    </span>
                    <p>Enter as it appears on any official documents</p>
                  </div>
                  <div className="flex gap-2 flex-wrap items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-5"
                        id="male"
                        value={"male"}
                      />
                      <label htmlFor="male" className="text-title">
                        Male
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-5"
                        id="female"
                        value={"female"}
                      />
                      <label htmlFor="female" className="text-title">
                        Female
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        className="h-5 w-5"
                        id="N/A"
                        value={"N/A"}
                      />
                      <label htmlFor="N/A" className="text-title">
                        I prefer not to say
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion title={"Contact and Residency details"}>
              <div className="mb-7">
                <label htmlFor="address" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                    Your Address
                  </span>
                  <p>
                    Make sure your address is as it appears on any official
                    documents, such as your passport, birth certificate or
                    driving license.
                  </p>
                </label>
                <input
                  type="text"
                  name="address"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="address"
                  placeholder="Address"
                  required
                />
              </div>
              <div className="mb-7">
                <label htmlFor="email_address" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                    Email Address
                  </span>
                  <p>
                    Make sure your email address is as it appears on any
                    official documents.
                  </p>
                </label>
                <input
                  type="email"
                  name="email_address"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="email_address"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-7">
                <label htmlFor="email_address" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                    Email Address
                  </span>
                  <p>
                    Make sure your email address is as it appears on any
                    official documents.
                  </p>
                </label>
                <input
                  type="email"
                  name="email_address"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="email_address"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                    Phone Number
                  </span>
                  <p>Enter as it appears on any official documents.</p>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </Accordion>
            <Accordion title={"Nationality Details"}>
              <div className="mb-7">
                <label htmlFor="home_country" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    What is your country of birth?
                  </span>
                </label>
                <select
                  type="text"
                  name="home_country"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="home_country"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="">Bangladesh</option>
                </select>
              </div>
              <div className="mb-7">
                <label htmlFor="nationality" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Nationality
                  </span>
                </label>
                <select
                  type="text"
                  name="nationality"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="nationality"
                  required
                >
                  <option value="">Select Nationality</option>
                  <option value="">Bangladeshi</option>
                </select>
              </div>
              <div>
                <label htmlFor="is_same_home_address" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
                    Birth Place
                  </span>
                  <p>Is your home address the same as your term address?</p>
                </label>
                <div className="flex gap-2 flex-wrap items-center mb-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="is_same_home_address"
                      className="h-5 w-5"
                      id="yes"
                      value={"yes"}
                    />
                    <label htmlFor="yes" className="text-title">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="is_same_home_address"
                      className="h-5 w-5"
                      id="no"
                      value={"no"}
                    />
                    <label htmlFor="no" className="text-title">
                      No
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  name="home_address"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="home_address"
                  placeholder="Birth Place"
                  required
                />
              </div>
            </Accordion>
            <Accordion title={"English Language requirements "}>
              <div className="mb-7">
                <label htmlFor="english_certificate" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Which English proficiency certificate do you have?
                  </span>
                </label>
                <select
                  type="text"
                  name="english_certificate"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="english_certificate"
                  required
                >
                  <option value="">Select Platform</option>
                  <option value="">IELTS</option>
                </select>
              </div>
              <div>
                <label htmlFor="score" className="block mb-4">
                  <span className="block text-title">Score</span>
                </label>
                <input
                  type="number"
                  name="score"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="score"
                  placeholder="Score"
                />
              </div>
            </Accordion>
            <Accordion title={"Finance and Funding"}>
              <div>
                <label htmlFor="study_source" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    What will be your main source of funding for your studies?
                  </span>
                </label>
                <select
                  type="text"
                  name="study_source"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="study_source"
                  required
                >
                  <option value="">Select Platform</option>
                  <option value="">Self Funded</option>
                </select>
              </div>
            </Accordion>
            <Accordion title={"Educational Requirements"}>
              <div className="mb-7">
                <label
                  htmlFor="educational_qualification"
                  className="block mb-4"
                >
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Qualification Name
                  </span>
                </label>
                <select
                  type="text"
                  name="educational_qualification"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="educational_qualification"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="">O level</option>
                </select>
              </div>
              <div className="mb-7">
                <label htmlFor="educational_institute" className="block mb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                    Institute Name
                  </span>
                </label>
                <select
                  type="text"
                  name="educational_institute"
                  className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                  id="educational_institute"
                  required
                >
                  <option value="">Select Institute</option>
                  <option value="">O level</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-7">
                <div>
                  <label htmlFor="graduation_year" className="block mb-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                      Graduation Year
                    </span>
                  </label>
                  <select
                    type="text"
                    name="graduation_year"
                    className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                    id="graduation_year"
                    required
                  >
                    <option value="">Select Graduation Year</option>
                    <option value="">2019</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="result" className="block mb-4">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title">
                      Result
                    </span>
                  </label>
                  <select
                    type="number"
                    name="result"
                    className="px-4 py-3 w-full outline-none bg-transparent text-placeholder border rounded-xl focus-within:text-text focus-within:border-text"
                    id="result"
                    required
                  >
                    <option value="">Select Result</option>
                    <option value="">2019</option>
                  </select>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="text-center">
            <Button
              type={"submit"}
              className={"mx-auto w-full mb-4"}
              text={"Submit"}
              icon={
                <span className="material-icons-outlined">trending_flat</span>
              }
            />
            <button className="ghost-btn mx-auto" type="button">
              <span className="font-bold text-secondary underline">Skip</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpInfoForm;
