/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import Accordion from "@/components/Accordion/Accordion";
import {useDispatch, useSelector} from "react-redux";
import {SetAddress, SetPhone,} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";

const ContactAndResidencyDetails = ({ info }) => {
  const dispatch = useDispatch();
  const { residency } = useSelector((state) => state.application_form);

  return (
    <Accordion
      title={"Contact and Residency details"}
      doneStatus={residency?.address && residency?.phone}
    >
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
          name="address"
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500 resize-none"
          id="address"
          value={residency?.address}
          onChange={(e) => dispatch(SetAddress(e.target.value))}
          rows={3}
          placeholder="Address"
          required
        ></textarea>
      </div>
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
          value={residency?.phone}
          onChange={(e) => dispatch(SetPhone(e.target.value))}
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
