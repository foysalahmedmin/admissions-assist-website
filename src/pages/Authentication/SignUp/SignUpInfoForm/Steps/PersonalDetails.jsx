import Accordion from "@/components/Accordion/Accordion";

const PersonalDetails = () => {
  return (
    <>
      <Accordion title={"Personal Details"} doneStatus={true}>
        <div className="mb-7">
          <label htmlFor="first_name" className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-title mb-2">
              First and Middle Name(s)
            </span>
            <p>
              Make sure your name is as it appears on any official documents,
              such as your passport, birth certificate or driving license.
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
              If you don't have a last name, add your first name here again.
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
    </>
  );
};

export default PersonalDetails;
