import Accordion from "@/components/Accordion/Accordion";
<<<<<<< HEAD

const FinanceAndFunding = () => {
  return (
    <Accordion title={"Finance and Funding"}>
=======
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetRegister } from "@/redux/progressSlice/progressSlice.js";
import { SetSourceFund } from "@/redux/applicationFormSlice/applicationFormSlice.jsx";

const FinanceAndFunding = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state) => state.progress);
  const { finance } = useSelector((state) => state.application_form);
  useEffect(() => {
    if (finance?.source_of_fund) {
      dispatch(SetRegister(register + 10));
    }
  }, [finance?.source_of_fund]);
  return (
    <Accordion
      title={"Finance and Funding"}
      doneStatus={finance?.source_of_fund && true}
    >
>>>>>>> update-project/main
      <div>
        <label htmlFor="study_source" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            What will be your main source of funding for your studies?
          </span>
        </label>
        <select
<<<<<<< HEAD
          type="text"
          name="study_source"
=======
          name="study_source"
          value={finance?.source_of_fund}
          onChange={(e) => dispatch(SetSourceFund(e.target.value))}
>>>>>>> update-project/main
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="study_source"
          required
        >
          <option value="">Select Platform</option>
<<<<<<< HEAD
          <option value="">Self Funded</option>
=======
          <option value="self_funded">Self Funded</option>
          <option value="education_loan">Education Loan</option>
          <option value="family_loan">Family Loan</option>
          <option value="donation">Donation</option>
>>>>>>> update-project/main
        </select>
      </div>
    </Accordion>
  );
};

export default FinanceAndFunding;
