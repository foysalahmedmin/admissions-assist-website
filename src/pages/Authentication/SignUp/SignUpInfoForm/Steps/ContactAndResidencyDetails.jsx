import Accordion from "@/components/Accordion/Accordion";
<<<<<<< HEAD

const ContactAndResidencyDetails = () => {
  return (
    <Accordion title={"Contact and Residency details"}>
=======
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetRegister } from "@/redux/progressSlice/progressSlice.js";
import {
  SetAddress,
  SetPhone,
} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";

const ContactAndResidencyDetails = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state) => state.progress);
  const { residency } = useSelector((state) => state.application_form);
  useEffect(() => {
    if (residency?.address && residency?.phone) {
      dispatch(SetRegister(register + 10));
    }
  }, [residency?.address, residency?.phone]);
  return (
    <Accordion
      title={"Contact and Residency details"}
      doneStatus={residency?.address && residency?.phone}
    >
>>>>>>> update-project/main
      <div className="mb-7">
        <label htmlFor="address" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Your Address
          </span>
          <p>
            Make sure your address is as it appears on any official documents,
            such as your passport, birth certificate or driving license.
          </p>
        </label>
        <textarea
<<<<<<< HEAD
          type="text"
          name="address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 resize-none"
          id="address"
=======
          name="address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 resize-none"
          id="address"
          value={residency?.address}
          onChange={(e) => dispatch(SetAddress(e.target.value))}
>>>>>>> update-project/main
          rows={3}
          placeholder="Address"
          required
        ></textarea>
      </div>
<<<<<<< HEAD
      <div className="mb-7">
        <label htmlFor="email_address" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Email Address
          </span>
          <p>
            Make sure your email address is as it appears on any official
            documents.
          </p>
        </label>
        <input
          type="email"
          name="email_address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="email_address"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="mb-7">
        <label htmlFor="email_address" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Email Address
          </span>
          <p>
            Make sure your email address is as it appears on any official
            documents.
          </p>
        </label>
        <input
          type="email"
          name="email_address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="email_address"
          placeholder="Email Address"
          required
        />
      </div>
=======
>>>>>>> update-project/main
      <div>
        <label htmlFor="phone" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
            Phone Number
          </span>
          <p>Enter as it appears on any official documents.</p>
        </label>
        <input
          type="tel"
          name="phone"
<<<<<<< HEAD
=======
          value={residency?.phone}
          onChange={(e) => dispatch(SetPhone(e.target.value))}
>>>>>>> update-project/main
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="phone"
          placeholder="Phone Number"
          required
        />
      </div>
    </Accordion>
  );
};

export default ContactAndResidencyDetails;
