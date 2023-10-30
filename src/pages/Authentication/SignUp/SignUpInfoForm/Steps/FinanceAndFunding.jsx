import Accordion from "@/components/Accordion/Accordion";

const FinanceAndFunding = () => {
  return (
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
  );
};

export default FinanceAndFunding;
