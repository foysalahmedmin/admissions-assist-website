import Accordion from "@/components/Accordion/Accordion";

const NationalityDetails = () => {
  return (
    <Accordion title={"Nationality Details"}>
      <div className="mb-7">
        <label htmlFor="home_country" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            What is your country of birth?
          </span>
        </label>
        <select
          type="text"
          name="home_country"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="home_country"
          required
        >
          <option value="">Select Country</option>
          <option value="">Bangladesh</option>
        </select>
      </div>
      <div className="mb-7">
        <label htmlFor="nationality" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Nationality
          </span>
        </label>
        <select
          type="text"
          name="nationality"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="nationality"
          required
        >
          <option value="">Select Nationality</option>
          <option value="">Bangladeshi</option>
        </select>
      </div>
      <div>
        <label htmlFor="is_same_home_address" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
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
            <label htmlFor="yes" className="text-text-900">
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
            <label htmlFor="no" className="text-text-900">
              No
            </label>
          </div>
        </div>
        <input
          type="text"
          name="home_address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="home_address"
          placeholder="Birth Place"
          required
        />
      </div>
    </Accordion>
  );
};

export default NationalityDetails;
