/*
 * Copyright (c) 2024. This product is copyright by Rian
 */

import Accordion from "@/components/Accordion/Accordion";
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "react-query";
import {fetchFilteredCountries} from "@/network/common/commonApi.js";
import {
  SetBirthAddress,
  SetBirthCountry,
  SetIsBirthPlaceSame,
  SetNationality,
} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";

const NationalityDetails = ({ info }) => {
  const dispatch = useDispatch();
  const { nationality } = useSelector((state) => state.application_form);

  const { data: countries } = useQuery({
    queryKey: ["filtered_countries"],
    queryFn: () => fetchFilteredCountries(),
  });

  return (
    <Accordion
      title={"Nationality Details"}
      doneStatus={
        nationality?.birth_country &&
        nationality?.is_birth_place_same &&
        nationality?.nationality
      }
    >
      <div className="mb-7">
        <label htmlFor="home_country" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            What is your country of birth?
          </span>
        </label>
        <select
          name="home_country"
          value={nationality?.birth_country}
          onChange={(e) => dispatch(SetBirthCountry(e.target.value))}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="home_country"
          required
        >
          <option value="">Select Country</option>
          {countries?.map((c) => (
            <option key={c?._id} value={c?._id}>
              {c?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-7">
        <label htmlFor="nationality" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Nationality
          </span>
        </label>
        <select
          name="nationality"
          value={nationality?.nationality}
          onChange={(e) => dispatch(SetNationality(e.target.value))}
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="nationality"
          required
        >
          <option value="">Select Nationality</option>
          {countries?.map((c) => (
            <option key={c?._id} value={c?._id}>
              {c?.name}
            </option>
          ))}
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
              checked={nationality?.is_birth_place_same}
              name="is_same_home_address"
              className="h-5 w-5"
              onChange={(e) => dispatch(SetIsBirthPlaceSame(true))}
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
              checked={nationality?.is_birth_place_same}
              className="h-5 w-5"
              onChange={(e) => dispatch(SetIsBirthPlaceSame(false))}
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
          value={nationality?.birth_address}
          onChange={(e) => dispatch(SetBirthAddress(e.target.value))}
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
