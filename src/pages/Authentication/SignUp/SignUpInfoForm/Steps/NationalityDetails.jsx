import Accordion from "@/components/Accordion/Accordion";
<<<<<<< HEAD

const NationalityDetails = () => {
  return (
    <Accordion title={"Nationality Details"}>
=======
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetRegister } from "@/redux/progressSlice/progressSlice.js";
import { useQuery } from "react-query";
import { fetchFilteredCountries } from "@/network/common/commonApi.js";
import {
  SetBirthAddress,
  SetBirthCountry,
  SetIsBirthPlaceSame,
  SetNationality,
} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";

const NationalityDetails = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state) => state.progress);
  const { nationality } = useSelector((state) => state.application_form);
  useEffect(() => {
    if (
      nationality?.birth_country &&
      nationality?.is_birth_place_same &&
      nationality?.nationality
    ) {
      dispatch(SetRegister(register + 10));
    }
  }, [
    nationality?.birth_country,
    nationality?.is_birth_place_same,
    nationality?.nationality,
  ]);

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
>>>>>>> update-project/main
      <div className="mb-7">
        <label htmlFor="home_country" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            What is your country of birth?
          </span>
        </label>
        <select
<<<<<<< HEAD
          type="text"
          name="home_country"
=======
          name="home_country"
          value={nationality?.birth_country}
          onChange={(e) => dispatch(SetBirthCountry(e.target.value))}
>>>>>>> update-project/main
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="home_country"
          required
        >
          <option value="">Select Country</option>
<<<<<<< HEAD
          <option value="">Bangladesh</option>
=======
          {countries?.map((c) => (
            <option key={c?._id} value={c?._id}>
              {c?.name}
            </option>
          ))}
>>>>>>> update-project/main
        </select>
      </div>
      <div className="mb-7">
        <label htmlFor="nationality" className="block mb-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
            Nationality
          </span>
        </label>
        <select
<<<<<<< HEAD
          type="text"
          name="nationality"
=======
          name="nationality"
          value={nationality?.nationality}
          onChange={(e) => dispatch(SetNationality(e.target.value))}
>>>>>>> update-project/main
          className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
          id="nationality"
          required
        >
          <option value="">Select Nationality</option>
<<<<<<< HEAD
          <option value="">Bangladeshi</option>
=======
          {countries?.map((c) => (
            <option key={c?._id} value={c?._id}>
              {c?.name}
            </option>
          ))}
>>>>>>> update-project/main
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
<<<<<<< HEAD
=======
              onChange={(e) => dispatch(SetIsBirthPlaceSame(true))}
>>>>>>> update-project/main
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
<<<<<<< HEAD
=======
              onChange={(e) => dispatch(SetIsBirthPlaceSame(false))}
>>>>>>> update-project/main
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
<<<<<<< HEAD
=======
          value={nationality?.birth_address}
          onChange={(e) => dispatch(SetBirthAddress(e.target.value))}
>>>>>>> update-project/main
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
