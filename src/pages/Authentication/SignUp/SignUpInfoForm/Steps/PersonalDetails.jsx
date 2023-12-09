import Accordion from "@/components/Accordion/Accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  SetAgent,
  SetDob,
  SetFirstName,
  SetGender,
  SetHeardUs,
  SetLastName,
} from "@/redux/applicationFormSlice/applicationFormSlice.jsx";
import { useQuery } from "react-query";
import { fetchAgents } from "@/pages/Authentication/requests/auth.js";
import { useEffect } from "react";
import { SetRegister } from "@/redux/progressSlice/progressSlice.js";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state) => state.progress);
  const { personal } = useSelector((state) => state.application_form);
  useEffect(() => {
    if (
      personal?.first_name &&
      personal?.last_name &&
      personal?.dob &&
      personal?.gender &&
      personal?.heard_us
    ) {
      dispatch(SetRegister(register + 20));
    }
  }, [
    personal?.first_name,
    personal?.last_name,
    personal?.dob,
    personal?.gender,
    personal?.heard_us,
  ]);

  const { data: agents } = useQuery({
    queryKey: ["agents"],
    queryFn: () => fetchAgents("agent"),
    enabled: personal?.heard_us === "agent",
  });
  return (
    <>
      <Accordion
        title={"Personal Details"}
        doneStatus={
          personal?.first_name &&
          personal?.last_name &&
          personal?.dob &&
          personal?.gender &&
          personal?.heard_us
        }
      >
        <div className="mb-7">
          <label htmlFor="first_name" className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
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
            value={personal?.first_name}
            onChange={(e) => dispatch(SetFirstName(e.target.value))}
            className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
            id="first_name"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-7">
          <label htmlFor="last_name" className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
              Last Name
            </span>
            <p>
              If you don't have a last name, add your first name here again.
            </p>
          </label>
          <input
            type="text"
            name="last_name"
            value={personal?.last_name}
            onChange={(e) => dispatch(SetLastName(e.target.value))}
            className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
            id="last_name"
            placeholder="Last name"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-7 mb-7">
          <div>
            <label htmlFor="date_of_birth" className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
                Date of Birth (s)
              </span>
              <p>Enter as it appears on any official documents</p>
            </label>
            <input
              type="date"
              name="date_of_birth"
              value={personal?.dob}
              onChange={(e) => dispatch(SetDob(e.target.value))}
              className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
              id="date_of_birth"
              required
            />
          </div>
          <div>
            <div className="block mb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900 mb-2">
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
                  onChange={(e) => dispatch(SetGender(e.target.value))}
                  id="male"
                  value={"male"}
                />
                <label htmlFor="male" className="text-text-900">
                  Male
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  className="h-5 w-5"
                  onChange={(e) => dispatch(SetGender(e.target.value))}
                  id="female"
                  value={"female"}
                />
                <label htmlFor="female" className="text-text-900">
                  Female
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  className="h-5 w-5"
                  onChange={(e) => dispatch(SetGender(e.target.value))}
                  id="not_prefer"
                  value={"not_prefer"}
                />
                <label htmlFor="not_prefer" className="text-text-900">
                  I prefer not to say
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="known_from" className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
              Where you heard about us?
            </span>
          </label>
          <select
            name="known_from"
            value={personal?.heard_us}
            onChange={(e) => dispatch(SetHeardUs(e.target.value))}
            className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
            id="known_from"
            required
          >
            <option value="">Select</option>
            <option value="social_media">Social Media</option>
            <option value="friends">Friends</option>
            <option value="agent">Agent</option>
          </select>
        </div>
        {personal?.heard_us === "agent" && (
          <div>
            <label htmlFor="known_from" className="block mb-4 mt-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-text-900">
                Agent
              </span>
            </label>
            <select
              value={personal?.agent}
              onChange={(e) => dispatch(SetAgent(e.target.value))}
              name="known_from"
              className="px-4 py-3 w-full outline-none bg-transparent text-text-100 border rounded-xl focus-within:text-text-500 focus-within:border-text-500"
              id="known_from"
              required
            >
              <option value="">Select</option>
              {agents?.map((x) => (
                <option key={x?._id} value={x?._id}>
                  {x?.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </Accordion>
    </>
  );
};

export default PersonalDetails;
