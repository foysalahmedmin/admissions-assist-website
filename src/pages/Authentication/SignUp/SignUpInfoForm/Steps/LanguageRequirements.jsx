import Accordion from "@/components/Accordion/Accordion";

const LanguageRequirements = () => {
  return (
    <Accordion title={"English Language requirements"}>
      <div className="mb-7">
        <label htmlFor="english_certificate" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Which English proficiency certificate do you have?
          </span>
        </label>
        <select
          type="text"
          name="english_certificate"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="english_certificate"
          required
        >
          <option value="">Select Platform</option>
          <option value="">IELTS</option>
        </select>
      </div>
      <div>
        <label htmlFor="score" className="block mb-4">
          <span className="block text-text-900">Score</span>
        </label>
        <input
          type="number"
          name="score"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="score"
          placeholder="Score"
        />
      </div>
    </Accordion>
  );
};

export default LanguageRequirements;
